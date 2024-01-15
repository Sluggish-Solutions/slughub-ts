<script lang="ts">
    import { Avatar } from '@skeletonlabs/skeleton';
   
    export let userData: any; 
    console.log(userData);
</script>
<!-- Main Container -->
<div class="flex flex-col bg-black h-screen py-7 lg:w-3/5 md">
    <!-- Prolife Image Container -->
    <div class="flex justify-center pt-7">
        <Avatar class="w-40" src={userData.profileImage}  /> 
    </div>
    <h1 class="flex justify-center text-3xl pt-5">{userData.username}</h1>
    <h1 class="flex justify-center text-sm pt-1 pb-9 text-blue-300">{userData.name}</h1>

    <!--Followers, Following Posts-->
    <div class="flex items-center justify-center">
        <div class="flex flex-col items-center px-5">
            <h1>{userData.followers}</h1>
            <h1 class="">Followers</h1>
        </div>
        <div class="flex flex-col items-center px-5" >
            <h1>{userData.following}</h1>
            <h1>Following</h1>
        </div>
        <div class="flex flex-col items-center px-8">
            <h1>{userData.postArray.length}</h1>
            <h1>Posts</h1>
        </div>

        
    </div>
    <!--Grid for posts-->
    <div class="grid grid-cols-3 gap-3 pt-10 px-5">
        
        
    </div>
    
</div>