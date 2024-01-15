<script lang="ts">
	import Profile from '$lib/components/Profile.svelte';
    import Post from "$lib/components/home/Post.svelte";
    import {getAllUserData} from "$stores/userStore";
    let x:any = getAllUserData();
    console.log(x);
</script>
<h1>dafdsf</h1>

<!-- <Profile {}/> -->
