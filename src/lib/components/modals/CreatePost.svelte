<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();
</script>

{#if $modalStore[0]}
	<main class="w-screen h-screen flex justify-center items-center">
		<form action="/upload" method="post" enctype="multipart/form-data">
			<label for="imageUpload">Select an image:</label>
			<input type="file" id="imageUpload" name="image" accept="image/*" />
			<br />
			<input type="submit" value="Upload" />
		</form>
	</main>
{/if}
