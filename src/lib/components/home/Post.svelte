<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';

	// need to add user types later
	export let info: any;
</script>

<div class="container">
	<!-- top segment: avatar and name -->
	<section class="flex">
		<Avatar src={info.user_profile_img} />
		<h3>
			{info.user_name}
		</h3>

	</section>
</div>
