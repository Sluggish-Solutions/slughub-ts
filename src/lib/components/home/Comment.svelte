<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	export let comment: any;
</script>

<div class="flex">
	<section class="p-2">
		<Avatar
			src="https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3&w=128&h=128&auto=format&fit=crop"
			width="w-12"
			rounded="rounded-full"
		/>
	</section>
	<section class="p-1 pt-2">
		<p class="font-light"><strong class="font-bold text-sm">{comment.user.name}</strong> {comment.text}</p>
	</section>
</div>
