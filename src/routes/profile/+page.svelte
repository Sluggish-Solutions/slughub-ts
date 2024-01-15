<script lang="ts">
	import Profile from '$lib/components/Profile.svelte';
    import Post from "$lib/components/home/Post.svelte";
    import { curr_user_id } from '$stores/userStore';
    let x=$curr_user_id;

    
</script>


<!-- <Profile {}/> -->
