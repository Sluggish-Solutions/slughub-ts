<script lang="ts">
	import Profile from '$lib/components/Profile.svelte';
    import Post from "$lib/components/home/Post.svelte";
<<<<<<< HEAD
    import { curr_user_id } from '$stores/userStore';
    let x=$curr_user_id;

    
=======
	let John = 
    {
        username:"John",
        name:"John Doe",
        followers:100,
        following:100,
        postArray: ["https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ],
        profileImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    };

    import {getAllUserData} from '$stores/userStore';
    import {onMount} from 'svelte'
    onMount(async ()=>{
    let user_data = await getAllUserData()
    console.log("object user data, ", user_data.data)

    })

>>>>>>> 447f699ba958d3e0cab8f55a7d665bb55980997b
</script>


<!-- <Profile {}/> -->
