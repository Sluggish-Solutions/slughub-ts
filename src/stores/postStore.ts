import { json } from '@sveltejs/kit';

// /api/newsletter GET

import { curr_user_id } from '$stores/userStore';
import type { Image } from 'lucide-svelte';
// /api/newsletter POST
// have the function in here do a post request to the server, and then the server updates the supabase db
export const toggleLikePost = async (post_id: string) => {
	let user_id = ''
	curr_user_id.subscribe((value) => user_id = value);

	const res = await fetch('/api/toggleLikePost', {
		method: 'POST',
		body: JSON.stringify({
			"user_id": user_id,
			"post_id": post_id,
		})
	})
	const response = await res.json()
	console.log("response from server for like", response);
}
export const postComment = async (post_id: string, comment_body: string) => {
	let user_id = ''
	curr_user_id.subscribe((value) => user_id = value);

	const res = await fetch('/api/postComment', {
		method: 'POST',
		body: JSON.stringify({
			"user_id": user_id,
			"post_id": post_id,
			"comment_body": comment_body,
		})
	})
	const response = await res.json()
	
	console.log(response);
// ideally it would be nice if there was some sort of toast if some error happend?
	//
}

export const createPost = async (image: any , body: string) => {
	let user_id = ''
	curr_user_id.subscribe((value) => user_id = value);

	const res = await fetch('/api/createPost', {
		method: 'POST',
		body: JSON.stringify({
			"user_id": user_id,
			"post_body": body,
			"image": image,
		})
	})
	const response = await res.json()
	
	console.log(response);
// ideally it would be nice if there was some sort of toast if some error happend?
	//
}
// user_data, following, followers, array of posts theyve posts, array of posts theyve liked


