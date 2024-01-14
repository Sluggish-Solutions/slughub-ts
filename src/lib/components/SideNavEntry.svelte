<script lang='ts'>
    export let Icon: any;
    export let label: string;
    export let href = "/";
</script>

<a href={href} class="flex items-center py-5">
    <svelte:component this={Icon} />
    <h1 class="ml-5">{label}</h1>
</a>