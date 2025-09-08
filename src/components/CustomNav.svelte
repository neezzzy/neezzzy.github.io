<script>
	import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar class="navbar bg-slate-200" let:hidden let:toggle>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi activeClass="text-pink-600" class="text-2xl uppercase" href="/">Home</NavLi>
		<NavLi activeClass="text-pink-600" class="text-2xl uppercase" href="#about">About Me</NavLi>
		<NavLi activeClass="text-pink-600" class="text-2xl uppercase" href="#projects">Projects</NavLi>
	</NavUl>
</Navbar>
