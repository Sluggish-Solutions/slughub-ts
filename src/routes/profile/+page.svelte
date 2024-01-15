<script lang="ts">
	import Profile from '$lib/components/Profile.svelte';

	export let data;
	console.log(data.curr_user.data)
</script>

<Profile curr_user={data.curr_user} />
