<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>
<div class="flex">
	<div class="hidden sm:block">
	  lkdsafj;ldsjfsldjf;ld
	</div>
	<div class="m-auto">
		<Header />
		<slot />
	  	<div class="sm:hidden fixed bottom-0 w-full">
			<Footer />
	  	</div>
	</div>
	<div class="hidden sm:block">
	  alkdsfj;lkdsjf;ldsajfsa
	</div>
</div>
  
