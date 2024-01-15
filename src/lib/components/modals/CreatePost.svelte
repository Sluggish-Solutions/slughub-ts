<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { FileDropzone, FileButton } from '@skeletonlabs/skeleton';
	import { FileUp } from 'lucide-svelte';
	import {createPost} from '$stores/postStore'
	const modalStore = getModalStore();

	let files: FileList;
	let uploaded = false;
	$: base64Image = '';

	const handleFileChange = (e: Event) => {
		if (e.target) {
			files = e.target.files;

			const selectedImage = e.target.files[0];

			const reader = new FileReader();

			reader.onload = (event) => {
				base64Image = event.target.result;
			};

			reader.readAsDataURL(selectedImage);


		}
	};
</script>

{#if $modalStore[0]}
	<main class="w-[100vw] h-[100vh] flex justify-center items-center backdrop-blur-md">
		{#if files && files[0]}
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<div class="flex flex-col gap-3 p-3">
				<img
					src={base64Image}
					alt="Uploaded image"
					class="max-w-[300px] max-h-[500px] md:max-w-[500px] md:max-h-[700px]"
				/>

				<FileButton name="files" on:change={handleFileChange}>Upload new Image</FileButton>
			</div>
		{:else}
			<FileButton name="files" on:change={handleFileChange}>Upload an Image</FileButton>
		{/if}
	</main>
{/if}
