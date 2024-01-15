<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';
    import { getCurrUserData } from '$stores/userStore';
    let userData:any;
    onMount(async()=>{
        userData = await getCurrUserData()
        console.log( userData.data.avatar_url )
    });
</script>

<div class="flex flex-col bg-black h-screen py-7 lg:w-3/5 md">
    <!-- Prolife Image Container -->
    <div class="flex justify-center pt-7">
        <!-- <Avatar class="w-40" src={ userData.data.avatar_url } />  -->
    </div>
    <!-- <h1 class="flex justify-center text-3xl pt-5">{userData.data.username}</h1> -->
    <!-- <h1 class="flex justify-center text-sm pt-1 pb-9 text-blue-300">{userData.data.full_name}</h1> -->

    <!--Followers, Following Posts-->
    <div class="flex items-center justify-center">
        <div class="flex flex-col items-center px-5">
            <!-- <h1>{userData.data.followers.length}</h1> -->
            <h1 class="">Followers</h1>
        </div>
        <div class="flex flex-col items-center px-5" >
            <!-- <h1>{userData.data.following.length}</h1> -->
            <h1>Following</h1>
        </div>
        <div class="flex flex-col items-center px-8">
            <!-- <h1>{userData.data.posts.length}</h1> -->
            <h1>Posts</h1>
        </div>

    </div>
    <!--Grid for posts-->
</div>