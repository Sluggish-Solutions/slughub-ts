
import { json, type RequestHandler } from '@sveltejs/kit'

export const POST: RequestHandler = async (event) => {
    // const data = await event.request.formData();
    const request = await event.request.json()
    const user_id = request["user_id"];

    const non_followers_data = await event.locals.supabase
        .from("users")
        .select(`*, posts(*), likes(*, parent_post(*))`)
        // need to filter posts where the id matches the user
        .eq("id", user_id)
        .single();

    const followers = await event.locals.supabase 
    .from("followers")
    .select(`*, kitten(*)`)
    // .eq(`daddy`, user_id)

    const following = await event.locals.supabase 
    .from("followers")
    .select(`*, daddy(*)`)
    // .eq(`kitten`, user_id)
    
    let all_user_data = Object()

    all_user_data = non_followers_data.data
    all_user_data.followers = followers.data
    all_user_data.following = following.data
    console.log("server_thing", all_user_data)

    return json({ success: true, data: all_user_data})
}
