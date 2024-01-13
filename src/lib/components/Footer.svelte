<script lang="ts">
    import { Home } from "lucide-svelte";
    import { Search } from "lucide-svelte";
    import { PlusSquare } from "lucide-svelte";
    import { Heart } from "lucide-svelte";
    import { User } from "lucide-svelte";


</script>

<nav class="bg-blue flex justify-between items-center px-2 h-12">
    <div class="ml-5">
    <Home/>
    </div>
    <Search/>
    <PlusSquare/>
    <Heart/>
    <div class="mr-5">
    <User/>
    </div>
</nav>

