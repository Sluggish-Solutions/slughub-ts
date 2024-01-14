<script lang="ts">
	import { Home, Search, PlusSquare, Send, Heart, User } from 'lucide-svelte';
	import LeftNavEntry from './LeftNavEntry.svelte';
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const modal: ModalSettings = {
		type: 'component',
		component: 'createPost'
	};

	const createPost = () => {
		modalStore.trigger(modal);
	};
</script>

<nav class="flex flex-col bg-slate-900 py-3 pl-9 pr-16 h-[100vh] min-w-fit">
	<div class="flex items-center gap-3 py-5">
		<img class="h-10" src="/icon.png" alt="Icon" />
		<h1 class="font-raleway text-2xl">SlugHub</h1>
	</div>

	<LeftNavEntry Icon={Home} label="Home" href="/" />
	<LeftNavEntry Icon={Search} label="Search" />

	<button on:click={createPost}>
		<LeftNavEntry Icon={PlusSquare} label="Create" />
	</button>
	<LeftNavEntry Icon={Send} label="Messages" href="/messages" />
	<LeftNavEntry Icon={Heart} label="Liked" href="/liked" />
	<LeftNavEntry Icon={User} label="Profile" href="/profile" />

</nav>
