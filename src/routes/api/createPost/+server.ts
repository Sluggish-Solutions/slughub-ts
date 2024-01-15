

import { json, type RequestHandler } from '@sveltejs/kit'
import { decode } from 'base64-arraybuffer'

export const POST: RequestHandler = async (event) => {
    const request = await event.request.json()
    const user_id = request["user_id"];
    const post_body = request["post_body"];
    const image = request["image"];

    console.log("server getting this", image);
    // okay now we have the image data, we want to create a link between the bucket and the img
    //
    //
    // how is this possible?


    const status = await event.locals.supabase
        .storage
        .from('post-images')
        .upload('avatar2.png', decode(image), {
            contentType: 'image/png'
        })

    console.log(status)


    return json({ success: true })
}
