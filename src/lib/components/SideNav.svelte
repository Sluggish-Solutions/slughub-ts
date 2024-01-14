<script lang="ts">
    import { Home } from "lucide-svelte";
    import { Search } from "lucide-svelte";
    import { PlusSquare } from "lucide-svelte";
    import { Heart } from "lucide-svelte";
    import { User } from "lucide-svelte";
</script>

<nav class="sticky top-3 z-20 flex flex-col">
    <div class="flex items-center">
        <img class="max-h-10 " src="/icon.png" alt="Icon">
        <h1 class="m-3 font-raleway text-2xl">SlugHub</h1>
    </div>
    <div>
        <div class="flex justify-between">
            <a class="px-3 py-3"><Search/></a>
            <h1 class= "py-3">Search</h1>
        </div>
        <div class="flex justify-between">
            <a class="px-3 py-3"><PlusSquare/></a>
            <h1 class= "py-3">Post</h1>
        </div>
        <div class="flex justify-between">
            <a class="px-3 py-3"><Heart/></a>
            <h1 class= "py-3">Liked</h1>
        </div>
        <div class="flex justify-between">
            <a class="px-3 py-3"><User/></a>
            <h1 class= "py-3">Profile</h1>
        </div>
            


    </div>
</nav>