<script lang="ts">
	import { Send } from 'lucide-svelte';
	import NavEntry from './NavEntry.svelte';
</script>

<nav class="flex justify-between items-center gap-3 p-3 px-5">
	<div class="flex items-center gap-3">
		<img class="max-h-10" src="/icon.png" alt="Icon" />
		<h1 class="text-2xl">SlugHub</h1>
	</div>

	<div class="p-2">
		<!-- <NavEntry Icon={Send} label="Messages" href="/messages" /> -->
	</div>
</nav>
