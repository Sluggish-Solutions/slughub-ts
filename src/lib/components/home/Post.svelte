<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Heart, MessageCircle, Send, Bookmark } from 'lucide-svelte';
	import Comment from './Comment.svelte';

	// need to add user types later
	export let info: any;

	let showMore = false;
	let showComments = false;

	const toggleReadMore = () => {
		showMore = !showMore;
	};

	const toggleComments = () => {
		showComments = !showComments;
	};
</script>

<main class="m-auto py-5">
	<!-- avatar and name -->
	<section class="flex items-center gap-3 py-2">
		<Avatar src={info.user.profile_img} width='w-10' />
		<h3>
			{info.user.name}
		</h3>
	</section>

	<!-- image post -->
	<section>
		<img src={info.details.img} alt={info.details.description.substring(0,50) + "..."} width={500} />
	</section>

	<!-- like, comment, share, bookmark -->
	<section>
		<div class="flex justify-between items-center h-11 p-1">
			<div class="left flex">
				<!-- lucide icons, can change color, size, strokeWidth -->
				<div class="p-1">
					<Heart />
				</div>
				<div class="p-1">
					<MessageCircle />
				</div>
				<div class="p-1">
					<Send />
				</div>
			</div>
			<div class="right p-1">
				<Bookmark />
			</div>
		</div>
	</section>

	<!-- likes & description -->
	<section class="font-light flex flex-col gap-2">
		<strong class="font-bold block">
			{info.details.likes} Likes
		</strong>

		<span>
			<strong class="font-bold">{info.user.name}</strong>

			{#if !showMore}
				{info.details.description.substring(0, 50)} ...<button
					on:click={toggleReadMore}
					class="btn p-0 text-slate-300">more</button
				>
			{:else}
				{info.details.description}
			{/if}
		</span>

		<span>
			{#if !showComments}
				<button on:click={toggleComments} class="btn p-0 text-slate-300">
					View all {info.details.comments.length} comments
				</button>
			{:else}
				{#each info.details.comments as comment}
					<Comment {comment} />
				{/each}
			{/if}
		</span>
	</section>
</main>

<style>
	h3 {
		font-weight: 600;
		font-size: 1.2rem;
	}
</style>
