// for each post, put it in this format: 
// {
//    post,
//    user

import type { QueryData } from "@supabase/supabase-js";
import type { PageLoad } from "./$types";
import { Post, Comment, Like, User } from "./types"; // Import necessary types
import type { PostsWithAllComments } from "$lib/queries/supabase";

// }
export const load: PageLoad = async ({ parent }) => {
	const { supabase, session } = await parent();


	// need to get all posts
	// const posts = await supabase
	// 	.from("posts")
	// 	.select(`*,author(*)`);
	////@ts-expect-error i dont know why it wont 
	//comapre with session.user.id (because its nullabe)
	//.eq('author', session?.user.id)

	// console.log("posts", posts)
	// const post_ids = posts.data?.map(element => element.id)
	// console.log("ids", post_ids);
	// const comments = await supabase
	// 	.from("comments")
	// 	.select(`*, author(*)`);


	const posts_w_comments = await supabase
		.from("posts")
		.select(`*, comments( *, author(*)), likes(*), author(*)`);

	// comments.data?.forEach(comment => {
	// 	
	// })
	// console.log("comments", comments)
	console.log("idk", posts_w_comments);
	//okay now we have all the posts and comments
	//need to organize this data somehow?
	// we have an array of posts, and an array of comments.  
	return {  session, posts_w_comments:  posts_w_comments.data } }



