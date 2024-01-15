
import { json, type RequestHandler } from '@sveltejs/kit'

// /api/newsletter GET

export async function GET(event) {
  const options: ResponseInit = {
    status: 418,
    headers: {
      X: 'Gon give it to ya',
    }
  }

  return new Response('Hello', options)
}

// /api/newsletter POST

export const POST: RequestHandler = async(event) => {
  // const data = await event.request.formData();
  const request = await event.request.json()
  console.log(request);
    const user_id = request["user_id"];
    const post_id = request["post_id"];
    
// console.log("we got caled babyyy", user_id)
// console.log("we got caled babyyy", post_id)
  const {data, error} = await event.locals.supabase.from("likes").insert({parent_post: post_id, author: user_id})
  if (error) {
    console.log(error);
   return json({success: false}) 
  }

// what data do we want the person to send ??
    
  // return success
  // return new Response(JSON.stringify({ success: true }), {
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  // })

  // it's common to return JSON, so SvelteKit has a helper
  return json({ success: true })
}
