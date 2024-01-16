<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { FileDropzone, FileButton } from '@skeletonlabs/skeleton';
	import { FileUp } from 'lucide-svelte';
	import { createPost } from '$stores/postStore';
	import { curr_user_id } from '$stores/userStore';
	const modalStore = getModalStore();

	let files: FileList;
	$: base64Image = '';
	let descValue = '';

	const handleFileChange = async (e: Event) => {
		if (e.target) {
			files = e.target.files;

			const selectedImage = e.target.files[0];

			const reader = new FileReader();

			reader.onload = (event) => {
				base64Image = event.target.result;
				localStorage.setItem("userImage", base64Image)
			};

			reader.readAsDataURL(selectedImage);
		}
	};

	const submitPost = async () => {
		let img_data = localStorage.getItem('userImage');

		let api_call = await createPost(img_data, descValue);
		
		console.log("api call", api_call);
		resetForm();

		modalStore.close();
	};

	const resetForm = () => {
		base64Image = '';
		descValue = '';
		localStorage.setItem("userImage", "");
	};
</script>

{#if $modalStore[0]}
	<main class="w-[100vw] h-[100vh] flex justify-center items-center backdrop-blur-md">
		<form on:submit|preventDefault={submitPost}>
			{#if files && files[0]}
				<!-- svelte-ignore a11y-img-redundant-alt -->
				<div class="flex flex-col gap-3 p-3">
					<img
						src={base64Image}
						alt="Uploaded image"
						class="max-w-[300px] max-h-[300px] md:max-w-[500px] md:max-h-[400px]"
					/>

					<FileButton name="files" on:change={handleFileChange}>Upload new Image</FileButton>
				</div>

				<label class="label">
					<span>Description</span>
					<input class="input" type="text" placeholder="Input" bind:value={descValue} />
				</label>

				<button type="submit" class="btn variant-filled-secondary my-3">Post</button>
			{:else}
				<FileButton name="files" on:change={handleFileChange}>Upload an Image</FileButton>
			{/if}
		</form>
	</main>
{/if}
