

import { json, type RequestHandler } from '@sveltejs/kit'
import { decode } from 'base64-arraybuffer'
import { randomUUID } from 'crypto';

export const POST: RequestHandler = async (event) => {
    const request = await event.request.json()
    const user_id = request["user_id"];
    const post_body = request["post_body"];
    const image = request["image"];

    // okay now we have the image data, we want to create a link between the bucket and the img
    //
    //
    // how is this possible?

const base64 = image.split('base64,')[1]

//need some way to figure out what the file type is 

    const status = await event.locals.supabase
        .storage
        .from('post-images')
        .upload(`${randomUUID()}.png`, decode(base64), {
            contentType: 'image/png'
        })

    console.log(status)

    //@ts-expect-error for somereason it says fullPath does not exist when it clearly does
    const constructed_path = `https://fiydshvejnphlcialzph.supabase.co/storage/v1/object/public/`+status.data.fullPath
    console.log(constructed_path);
    
    const new_post = await event.locals.supabase
    .from('posts')
    .insert({author: user_id, img_url: constructed_path, description: post_body})
    .select()

    if (new_post.error) {
        console.log(new_post.error);
        
        return json({success: false})
        
    }
    return json({ success: true , new_post: new_post.data})
}
