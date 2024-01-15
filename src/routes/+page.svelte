<script lang="ts">
	import Post from '$lib/components/home/Post.svelte';

	// $curr_user_id works, call anywhere it's needed
	import { curr_user_id } from '$stores/userStore';

	export let data;
</script>

<div class="w-full md:max-w-xl flex flex-col justify-center">
	{#each data.posts_w_comments || [] as post}
		<Post {post} />
	{/each}
</div>
