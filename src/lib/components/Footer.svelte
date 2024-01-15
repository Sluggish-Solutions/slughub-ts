<script lang="ts">
	import { Home, Search, PlusSquare, Heart, User } from 'lucide-svelte';
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

<nav class="flex justify-between items-center gap-3 p-1 px-7">
	<NavEntry Icon={Home} href="/" />
	<NavEntry Icon={Search} />

	<button on:click={createPost}>
		<NavEntry Icon={PlusSquare} />
	</button>
	<NavEntry Icon={Heart} href="/liked" />
	<NavEntry Icon={User} href="/profile" />
</nav>
