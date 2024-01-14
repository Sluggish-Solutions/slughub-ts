<script lang="ts">
    import '../app.postcss';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import SideNav from '$lib/components/SideNav.svelte';
</script>

<div class="flex justify-center">
	<!-- left sidebar -->
	<section class="h-[100vh] z-20 hidden md:block">
		<SideNav/>
	</section>

	<!-- main content -->
	<section>
		<div class="side-nav sticky top-0 z-20 p-4 bg-black sm:hidden">
			<Header />
		</div>

		<main class="p-5">
			<slot />
		</main>

		<div class="sm:hidden fixed bottom-0 w-full">
			<Footer />
		</div>
	</section>

	<!-- right section -->
	<section class="side-nav">
		right section goes here
	</section>
</div>

<style>
	section {
		@apply lg:w-1/3;
	}

	.side-nav {
		@apply hidden lg:block;
	}
</style>