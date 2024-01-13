<script lang="ts">
    import { Home } from "lucide-svelte";
    import { Search } from "lucide-svelte";
    import { PlusSquare } from "lucide-svelte";
    import { Heart } from "lucide-svelte";
    import { User } from "lucide-svelte";
</script>

<nav class="sticky top-20 z-20 flex">
    <div class="flex items-center">
        <img class="max-h-10 " src="/icon.png" alt="Icon">
        <h1 class="m-3 font-raleway text-2xl">SlugHub</h1>
    </div>
    <div>
        <a class="px-3 py-3"><Search/></a>
        <a class="px-3 py-3"><PlusSquare/></a>
        <a class="px-3 py-3"><Heart/></a>
        <a class="px-3 py-3"><User/></a>
    </div>
   
    
    
    


</nav>