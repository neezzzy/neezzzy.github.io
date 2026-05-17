<script>
	import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar
	class="navbar sticky top-0 z-40 border-b border-neutral-200/80 bg-white/85 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/85"
	let:hidden
	let:toggle
>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi activeClass="text-primary-700" class="text-sm font-semibold uppercase tracking-wide" href="#home">Home</NavLi>
		<NavLi activeClass="text-primary-700" class="text-sm font-semibold uppercase tracking-wide" href="#about">About</NavLi>
		<NavLi activeClass="text-primary-700" class="text-sm font-semibold uppercase tracking-wide" href="#projects">Projects</NavLi>
		<NavLi activeClass="text-primary-700" class="text-sm font-semibold uppercase tracking-wide" href="#toolbox">Toolbox</NavLi>
		<NavLi activeClass="text-primary-700" class="text-sm font-semibold uppercase tracking-wide" href="#process">Process</NavLi>
		<NavLi activeClass="text-primary-700" class="text-sm font-semibold uppercase tracking-wide" href="#contact">Contact</NavLi>
	</NavUl>
</Navbar>
