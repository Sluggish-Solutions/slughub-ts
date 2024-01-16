
import { json, type RequestHandler } from '@sveltejs/kit'

import type { Config } from '@sveltejs/adapter-vercel';
export const config: Config = {
	runtime: 'edge'
};
export const POST: RequestHandler = async (event) => {
    // const data = await event.request.formData();
    const request = await event.request.json()
    const user_id = request["user_id"];
    const post_id = request["post_id"];
    const comment_body = request["comment_body"];

    //this is the actual insertion operation, this should only be done after verifying that the user exists and that they havent liked the post already
    const { data, error } = await event.locals.supabase
        .from("comments")
        .insert({ parent_post: post_id, author: user_id , body: comment_body})
        .select()
    if (error) {
        console.log(error);
        return json({ success: false })
    }

    //console.log("data returned from insert", data);

    return json({ success: true,  comment: data })
}
