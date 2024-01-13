<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Heart, MessageCircle, Send, Bookmark } from 'lucide-svelte';

	// need to add user types later
	export let info: any;
</script>

<div class="w-1/2 m-auto">
	<!-- top segment: avatar and name -->
	<section class="flex items-center">
		<Avatar src={info.user.profile_img} />
		<h3>
			{info.user.name}
		</h3>
	</section>

	<!-- image post -->
	<section>
		<img src={info.details.img} alt={info.details.description} />
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
</div>
