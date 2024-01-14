<script lang="ts">
	import Post from '$lib/components/home/Post.svelte';

	// $curr_user_id works, call anywhere it's needed
	import { curr_user_id } from '$stores/userStore';
	
	// on load, home page will get an array of posts (objects); data should get the first 3 posts, each containing (post object and user object)
	export let data;


	let post1 = {
		details: {
			id: 1, // post_id
			user_id: 1,
			img: 'https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			description: 'This is the first post that you will like for sure, I bet you!',
			likes: 1023,
			comments: [
				{
					id: 1,
					text: "That's great. Keep up the good work!",
					user: {
						id: 1,
						name: 'john_the_great',
						profile_img:
							'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					},
					createdAt: 23234
				},
				{
					id: 2,
					text: 'How can you live like this? I am so jealous!',
					user: {
						id: 3,
						name: 'harry_kane',
						profile_img:
							'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					},
					createdAt: 73854
				}
			],
			created_at: '2024-01-14T12:00:00Z'
		},
		user: {
			id: 1,
			name: 'harrison_ford_mustang',
			profile_img:
				'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=cro'
		}
	};
	console.log('lamo', data.posts_w_comments, data.session?.user.id);
</script>

<div class="w-full md:max-w-xl flex flex-col justify-center">
	<Post info={post1} />
	<Post info={post1} />
	<Post info={post1} />
	<Post info={post1} />
	<Post info={post1} />
	<Post info={post1} />
</div>
