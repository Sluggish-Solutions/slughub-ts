<script lang="ts">
	import { Home, Search, PlusSquare, Send, Heart, User } from 'lucide-svelte';
	import LeftNavEntry from './LeftNavEntry.svelte';
</script>

<nav class="flex flex-col bg-slate-900 py-3 pl-9 pr-16 h-[100vh] min-w-fit">
	<div class="flex items-center gap-3 py-5">
		<img class="h-10" src="/icon.png" alt="Icon" />
		<h1 class="font-raleway text-2xl">SlugHub</h1>
	</div>

<<<<<<< HEAD
    <LeftNavEntry Icon={Home} label="Home" />
    <LeftNavEntry Icon={Search} label="Search" />
    <LeftNavEntry Icon={PlusSquare} label="Post" />
    <LeftNavEntry Icon={Send} label="Messages" />
    <LeftNavEntry Icon={Heart} label="Liked" />
    <LeftNavEntry Icon={User} label="Profile" href="/profile"/>
=======
	<LeftNavEntry Icon={Home} label="Home" href="/" />
	<LeftNavEntry Icon={Search} label="Search" />
	<LeftNavEntry Icon={PlusSquare} label="Post" href="/post" />
	<LeftNavEntry Icon={Send} label="Messages" href="/messages" />
	<LeftNavEntry Icon={Heart} label="Liked" href="/liked" />
	<LeftNavEntry Icon={User} label="Profile" href="/profile" />
>>>>>>> 0c3bab62bf05089953f1aa35c13216e4943689c8
</nav>
