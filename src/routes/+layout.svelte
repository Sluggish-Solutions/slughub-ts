<script lang="ts">
    import '../app.postcss';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import SideNav from '$lib/components/SideNav.svelte';
</script>

<div class="flex justify-center">
	<div class="sticky top-0 z-20 py-3 px-10 bg-black hidden md:block">
		<SideNav/>
	</div>
	<div>
		<div class="sticky top-0 z-20 p-4 bg-black sm:hidden">
			<Header />
		</div>

		<main class="p-5">
			<slot />
		</main>
		<div class="sm:hidden fixed bottom-0 w-full">
			<Footer />
		</div>
	</div>
</div>