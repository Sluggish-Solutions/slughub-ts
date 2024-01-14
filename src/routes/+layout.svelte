<script lang="ts">
    import '../app.postcss';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import SideNav from '$lib/components/SideNav.svelte';
</script>

<div class='relative h=[100vh]'>

<main class="flex h-[100vh]">
	<!-- left sidebar -->
	<section class='left-nav'>
		<SideNav/>
	</section>

	<!-- main content -->
	<section class="w-full max-w-[50%] mx-auto h-[100vh]">
		<!-- top bar -->
		<div class="mobile-nav">
			<Header />
		</div>

		<!-- posts container -->
		<main class="p-5">
			<slot />
		</main>

		<!-- bottom nav bar -->
		<div class="mobile-nav bottom-0">
			<Footer />
		</div>
	</section>

	<!-- right section -->
	<section class="right-nav">
		right section goes here
	</section>
</main>
</div>

<style>
	.left-nav {
		@apply hidden md:block;
	}

	.right-nav {
		@apply hidden lg:block;
	}
	
	.mobile-nav {
		@apply block md:hidden absolute bg-slate-900;
	}
</style>