<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Heart, MessageCircle, Send, Bookmark } from 'lucide-svelte';

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

<div class="m-auto">
	<!-- top segment: avatar and name -->
	<section class="flex items-center">
		<Avatar src={info.user.profile_img} />
		<h3>
			{info.user.name}
		</h3>
	</section>

	<!-- image post -->
	<section>
		<img src={info.details.img} alt={info.details.description} width={500} />
	</section>

	<!-- interaction bar: like, comment, share, bookmark -->
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
	<section class="font-light">
		<strong class="font-bold block">
			{info.details.likes} Likes
		</strong>
		<strong class="font-bold">{info.user.name}</strong>

		{#if !showMore}
			{info.details.description.substring(0, 50)} ...<button
				on:click={toggleReadMore}
				class="btn p-0 text-slate-300">more</button
			>
		{:else}
			{info.details.description}
		{/if}

		{#if !showComments}
			<button on:click={toggleComments} class="btn p-0 text-slate-300">
				View all {info.details.comments.length} comments
			</button>
		{:else}
			{#each info.details.comments as comment}
				<p>
					{comment}
				</p>
			{/each}
		{/if}
	</section>
</div>

<!-- <div class="post">
	{#if showMore}
		<div class="more-content">
			<p>Additional text goes here...</p>
		</div>
	{/if}
</div>

<button on:click={toggleReadMore}>
	{#if showMore}
		Read less
	{/if}
	{!showMore} Read more
</button>
<div /> -->
