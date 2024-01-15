<script lang="ts">
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { FileDropzone, FileButton } from '@skeletonlabs/skeleton';
	import { FileUp } from 'lucide-svelte';
	import {createPost} from '$stores/postStore'
	import {curr_user_id} from '$stores/userStore'
	const modalStore = getModalStore();

	let files: FileList;
	let uploaded = false;
	$: base64Image = ''

	const handleFileChange = async(e: Event) => {
		if (e.target) {
			files = e.target.files;

			const selectedImage = e.target.files[0];

			const reader = new FileReader();

			reader.onload = (event) => {
				base64Image = event.target.result;
				// Store the Base64 image in local storage
				localStorage.setItem('userImage', base64Image);
			};

			reader.readAsDataURL(selectedImage);
				
		}

		await submitPost("djaowjdoaijdoiwajd");
	};


	const submitPost = async(desciption: string) =>{

		let img_data = localStorage.getItem('userImage');
		
		let api_call = await createPost(img_data, desciption, );
			
	}


</script>

{#if $modalStore[0]}
	<main class="w-[80vw] h-[80vh] flex justify-center items-center backdrop-blur-md">
		{#if files && files[0]}
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<div class="flex flex-col gap-3 p-3">
				<img
					src={base64Image}
					alt="Uploaded image"
					class="md:max-h-[500px] md:max-w-[700px]"
				/>

				<FileButton name="files" on:change={handleFileChange}>Upload new Image</FileButton>
			</div>
		{:else}
			<FileButton name="files" on:change={handleFileChange}>Upload an Image</FileButton>
		{/if}
		<!-- {#if uploaded}
			{files[0].name}
		{:else}
			<FileDropzone name="files" bind:files on:change={onChangeHandler}>
				<svelte:fragment slot="lead"><FileUp /></svelte:fragment>
				<svelte:fragment slot="message">Upload image or drag and drop.</svelte:fragment>
				<svelte:fragment slot="meta">PNG, JPG, HEIC ...</svelte:fragment>
			</FileDropzone>
		{/if}

		<form action="/upload" method="post" enctype="multipart/form-data" class="border-2">
			<label for="imageUpload">Select an image:</label>
			<input type="file" id="imageUpload" name="image" accept="image/*" />
			<input type="submit" value="Upload" />
		</form> -->
	</main>
{/if}
