import { json } from '@sveltejs/kit';

// /api/newsletter GET

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

export async function POST(event: { request: { formData: () => any } }) {
	const data = await event.request.formData();
	const user_id = data.get('user_id');
	const post_id = data.get('post_id');

	// what data do we want the person to send ??
	// the postid of what they liked
	// and we also want some way to check if they are authenticated?
	// the user id of who liked the post

	const email = data.get('');

	// subscribe the user to the newsletter
	console.log(email);

	// return success
	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});

	// it's common to return JSON, so SvelteKit has a helper
	return json({ success: true });
}
