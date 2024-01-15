import { json } from '@sveltejs/kit';

// /api/newsletter GET

import { curr_user_id } from '$stores/userStore';
export async function GET(event: any) {
	console.log(event);

	const options: ResponseInit = {
		status: 418,
		headers: {
			X: 'Gon give it to ya'
		}
	};

	return new Response('Hello', options);
}

// /api/newsletter POST
// have the function in here do a post request to the server, and then the server updates the supabase db
export const likePost = async (post_id: string) => {
	let user_id = ''
	curr_user_id.subscribe((value) => user_id = value);
	console.log("likepost working??/", user_id);


	const res = await fetch('/api/likePost', {
		method: 'POST',
		body: JSON.stringify({
			"user_id": user_id,
			"post_id": post_id,
		})
	})
	console.log("returned", res);

	console.log(post_id);

}
