<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import LeftNav from '$lib/components/LeftNav.svelte';
	import RightNav from '$lib/components/RightNav.svelte';

	import { AppShell } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="sidebarLeft">
		<div class="leftNav">
			<LeftNav />
		</div>
	</svelte:fragment>

	<svelte:fragment slot="sidebarRight">
		<div class="rightNav">
			<RightNav />
		</div>
	</svelte:fragment>

	<!-- header -->
	<svelte:fragment slot="pageHeader">
		<div class="mobile z-10">
			<Header />
		</div>
	</svelte:fragment>

	<div class="flex justify-center">
		<slot />
	</div>

	<!-- footer -->
	<svelte:fragment slot="pageFooter">
		<div class="mobile bottom-0">
			<Footer />
		</div>
	</svelte:fragment>
</AppShell>

<style>
	.leftNav {
		@apply hidden md:block;
	}

	.rightNav {
		@apply hidden lg:block;
	}

	.mobile {
		@apply block md:hidden bg-inherit fixed;
	}
</style>
