<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Heart, MessageCircle, Send, Bookmark } from 'lucide-svelte';
	import Comment from './Comment.svelte';
	import { toggleLikePost } from '$stores/postStore'
	import type { PostsWithAllComments } from '../../queries/supabase';
	// need to add user types later
	export let post: any;
	let showMore = false;
	let showComments = false;

	// Get the current timestamp
	const now = new Date();
	const created = new Date(post.created_at);

	const timeDifference = now.getTime() - created.getTime();

	// Convert the difference to seconds, minutes, etc.
	const seconds = Math.floor(timeDifference / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);

	let time_since = '1w';

	if (days > 7) {
		time_since = `${Math.floor(days / 7)}w`;
	} else if (days > 0) {
		time_since = `${days}d`;
	} else if (hours > 0) {
		time_since = `${hours}h`;
	} else {
		time_since = `${minutes}m`;
	}

	const toggleReadMore = () => {
		showMore = !showMore;
	};

	const toggleComments = () => {
		showComments = !showComments;
	};

</script>

<main class="py-3 w-full">
	<!-- avatar and name -->
	<section class="flex items-center gap-3 p-3">
		<Avatar src={post.author.avatar_url} width="w-10" />

		<h3>
			{post.author.username} <span class="opacity-70 font-light">• {time_since}</span>
		</h3>
	</section>

	<!-- image post -->
	<section>
		<img
			src={post.img_url}
			alt={post.description.substring(0, 50) + '...'}
			class="h-[450px] sm:h-[600px] object-cover w-full"
		/>
	</section>

	<!-- like, comment, share, bookmark -->
	<section>
		<div class="flex justify-between items-center p-3">
			<div class="flex gap-2">
				<!-- lucide icons, can change color, size, strokeWidth -->
				<button on:click|preventDefault={()=>{toggleLikePost(post.id)}}>
					<div>
						<Heart />
					</div>
				</button>
				<div>
					<MessageCircle />
				</div>
				<div>
					<Send />
				</div>
			</div>
			<div>
				<Bookmark />
			</div>
		</div>
	</section>

	<!-- likes & description -->
	<section class="font-light flex flex-col gap-2 px-3">
		<strong class="font-bold block">
			{post.likes.length} Likes
		</strong>

		<span>
			<h3 class="font-bold">{post.author.username}</h3>

			{#if !showMore}
				{post.description.substring(0, 50)}
				{#if post.description.length > 50}
					...<button on:click={toggleReadMore} class="btn p-0 text-slate-300">more</button>
				{/if}
			{:else}
				{post.description}
			{/if}
		</span>

		<span>
			{#if !showComments}
				<button on:click={toggleComments} class="btn p-0 text-slate-300">
					View all {post.comments.length} comments
				</button>
			{:else}
				{#each post.comments as comment}
					<Comment {comment} />
				{/each}
			{/if}
		</span>
	</section>
</main>

<style>
	h3 {
		font-weight: 600;

		@apply md:text-lg inline font-semibold;
	}

	span {
		@apply md:text-lg;
	}
</style>
