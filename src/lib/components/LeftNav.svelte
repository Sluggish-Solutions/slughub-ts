<script lang="ts">
	import { Home, Search, PlusSquare, Send, Heart, User } from 'lucide-svelte';
	import NavEntry from './NavEntry.svelte';
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

<nav class="flex md:flex-col bg-slate-900 py-3 pl-9 pr-12 h-[100vh] min-w-fit">
	<div class="flex items-center gap-3 md:px-3 md:py-5">
		<img class="h-10" src="/icon.png" alt="Icon" />
		<h1 class="text-2xl">SlugHub</h1>
	</div>

	<NavEntry Icon={Home} label="Home" href="/" />
	<NavEntry Icon={Search} label="Search" />

	<button on:click={createPost}>
		<NavEntry Icon={PlusSquare} label="Create" />
	</button>
	<!-- <NavEntry Icon={Send} label="Messages" href="/messages" /> -->
	<NavEntry Icon={Heart} label="Liked" href="/liked" />
	<NavEntry Icon={User} label="Profile" href="/profile" />
</nav>
