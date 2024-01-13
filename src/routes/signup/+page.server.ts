import type { Actions } from "@sveltejs/kit";

const OAUTH_PROVIDERS = ["google"];
export const actions: Actions = {
	
	signup: async(event: event)=>{


        const formdata = await event.request.formData()

        const email = formdata.get('email')
        const password = formdata.get("password")
 
        let { data, error } = await event.locals.supabase.auth.signInWithPassword({
            email: email!.toString(),
            password: password!.toString()
          })
        
        //todo need some sort of error handling
          console.log(data)

        //best way to handle this??
        if (data.user?.aud == 'authenticated'){
            return {user: data.user} 
        }
        else {
            return {user: false}
        }

	}

}

