<script>
	import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { DarkMode } from 'flowbite-svelte';
	let btnClass =
		'bg-gray-300 dark:bg-gray-100 dark:text-yellow-400 text-yellow-200 dark:text-gray-500 hover:bg-gray-500 dark:hover:bg-gray-500 rounded-3xl p-2';
</script>

<Navbar class="navbar bg-slate-200" let:hidden let:toggle>
	<div class="theme">
		<DarkMode {btnClass} />
	</div>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi activeClass="text-pink-600" class="text-2xl uppercase" href="/">Home</NavLi>
		<NavLi activeClass="text-pink-600" class="text-2xl uppercase" href="#about">About Me</NavLi>
		<NavLi activeClass="text-pink-600" class="text-2xl uppercase" href="#projects">Projects</NavLi>
	</NavUl>
</Navbar>
