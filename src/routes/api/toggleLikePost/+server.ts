
import { json, type RequestHandler } from '@sveltejs/kit'

// /api/newsletter GET

import type { Config } from '@sveltejs/adapter-vercel';
export const config: Config = {
	runtime: 'edge'
};

export const POST: RequestHandler = async (event) => {
  // const data = await event.request.formData();
  const request = await event.request.json()
  const user_id = request["user_id"];
  const post_id = request["post_id"];

  // unsure if we need this code block ,we dont really need to verify if the user string that we 
  // get from post is a valid user, because when we create the like, supabase should check if 
  // its a valid foriegn key to user, if it isnt it throws an error, which would mean its checked inside
  // db, so we should be good
  // const user = await event.locals.supabase
  //   .from("users")
  //   .select(`(*)`)
  //   .eq("id", user_id);
  //
  // console.log("server_gotten_user_id", user_id);
  // if (user.data === ) {
  //   
  // }

  //unlike operation
  const check_if_user_liked = await event.locals.supabase
    .from("likes")
    .select(`(*), author(*)`)
    .eq("author", user_id)
    .eq("parent_post", post_id)

  // this means that the user already liked it, lets just dislike it here
  console.log("checked_if_uiser_liekd", check_if_user_liked);

  if (check_if_user_liked.data?.length !== 0) {
    const deleted_like = await event.locals.supabase
      .from("likes")
      .delete()
      .eq("author", user_id)
      .eq("parent_post", post_id)


    if (deleted_like.error) {
      console.log(deleted_like.error);
      return json({ like_staus: "error" })
    }

    console.log(check_if_user_liked.data)

    return json({ like_status: "deleted", like_object: check_if_user_liked.data })
  }
  //console.log("user liked", check_if_user_liked);
  //


  //like operation
  //this is the actual insertion operation, this should only be done after verifying that the user exists and that they havent liked the post already
  const { data, error } = await event.locals.supabase.from("likes").insert({ parent_post: post_id, author: user_id }).select()
  if (error) {
    console.log(error);
    return json({ success: false })
  }

  //console.log("data returned from insert", data);

  return json({ like_status: "liked", like_object: data })
}
