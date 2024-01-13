<script lang='ts'>
	import Post from '$lib/components/home/Post.svelte';

	// on load, home page will get an array of posts (objects); data should get the first 3 posts, each containing (post object and user object)
	export let data

	let post1 = {
		details: {
			id: 1, // post_id
			user_id: 1,
			img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			description: 'this is the first post',
			likes: 0,
			comments: ["that's great", "wow", "..."],
			created_at: '2021-10-10 10:10:10'
		},
		user: {
			id: 1,
			name: 'john',
			profile_img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
		}
	}
</script>

<Post info={post1} />

