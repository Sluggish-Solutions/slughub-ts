<script>
	import Post from '$lib/components/home/Post.svelte';

	// on load, home page will get an array of posts (objects); data should get the first 3 posts, each containing (post object and user object)
	export let data

	let post1 = {
		info: {
			id: 1, // post_id
			user_id: 1,
			description: 'this is the first post',
			content: 'test content',
			likes: 0,
			comments: 0,
			created_at: '2021-10-10 10:10:10'
		},
		user: {
			id: 1,
			name: 'john',
			profile_img: 'https://i.imgur.com/8Km9tLL.png'
		}
	}
</script>

<Post info={post1} />
