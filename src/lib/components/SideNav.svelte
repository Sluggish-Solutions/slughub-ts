<script lang="ts">
    import { Home, Search, PlusSquare, Send, Heart, User } from 'lucide-svelte';
    import SideNavEntry from './SideNavEntry.svelte';
</script>

<nav class="flex flex-col bg-slate-900 py-3 pl-9 pr-16 h-[100vh] min-w-fit ">
    <div class="flex items-center gap-3 py-5">
        <img class="h-10" src="/icon.png" alt="Icon" />
        <h1 class="font-raleway text-2xl">SlugHub</h1>
    </div>

    <SideNavEntry Icon={Home} label="Home" />
    <SideNavEntry Icon={Search} label="Search" />
    <SideNavEntry Icon={PlusSquare} label="Post" />
    <SideNavEntry Icon={Send} label="Messages" />
    <SideNavEntry Icon={Heart} label="Liked" />
    <SideNavEntry Icon={User} label="Profile" />
</nav>
