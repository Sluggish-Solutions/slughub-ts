import type { Provider } from "@supabase/supabase-js";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions } from "@sveltejs/kit";
import { warn } from "console";

const OAUTH_PROVIDERS = ["google"];
export const actions: Actions = {

    signup: async ({ request, locals }) => {


        const formdata = await request.formData()

        const email = formdata.get('email')
        const password = formdata.get("password")

        const { data, error } = await locals.supabase.auth.signInWithPassword({
            email: email!.toString(),
            password: password!.toString()
        })

        //todo need some sort of error handling
        console.log(data)

        //best way to handle this??
        if (data.user?.aud == 'authenticated') {
            return { user: data.user }
        }
        else {
            return { user: false }
        }

    },
    login_Oauth: async ({ request, locals, url }) => {
        // the form action is going to have the provider added to the email
        // so the formAction knows what provider you are using
        const provider = url.searchParams.get("provider") as Provider;

        if (provider) {
            if (!OAUTH_PROVIDERS.includes(provider)) {
                return fail(400, {
                    error: "provider not supported."
                })

            }
            const { data, error } = await locals.supabase.auth.signInWithOAuth(
                { provider: provider });

            if (error) {
                console.log(error);
                return fail(400, {
                    error: "provider not supported."
                })

            }
            //what does data actually return here ?
            console.log(data) ;
            // what is the shape of data
            throw redirect(303, data.url)
        }
        //i think theres a better way to do this
        // const {data, error} = await locals
    }


}




