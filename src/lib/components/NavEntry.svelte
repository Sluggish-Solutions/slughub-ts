<script lang='ts'>
    export let Icon: any;
    export let label: string = '';
    export let href: string = '';
</script>

<a {href} class="flex items-center px-3 py-5">
    <svelte:component this={Icon} />
    <h1 class="md:mx-5">{label}</h1>
</a>