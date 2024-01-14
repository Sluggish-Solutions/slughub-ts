<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	export let comment: any;
</script>

<div class="flex">
	<section class="p-2">
		<Avatar
			src={comment.author_img_url}
			width="w-12"
			rounded="rounded-full"
		/>
	</section>
	<section class="p-1 pt-2">
		<p class="font-light"><strong class="font-bold text-sm">{comment.author}</strong> {comment.body}</p>
	</section>
</div>
