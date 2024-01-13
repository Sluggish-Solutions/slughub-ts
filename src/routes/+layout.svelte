<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="w-1/2 m-auto">
	<Header />
	<slot />
	<Footer />
</div>
