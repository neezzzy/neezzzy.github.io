<script>
	import Hero from '../components/Hero.svelte';
	import About from '../components/About.svelte';
	import Projects from '../components/Projects.svelte';
	import DeveloperToolbox from '../components/DeveloperToolbox.svelte';
	import HowIBuild from '../components/HowIBuild.svelte';
	import LearningFocus from '../components/LearningFocus.svelte';
	import Footer from '../components/Footer.svelte';
	import CustomNav from '../components/CustomNav.svelte';
	import { projects } from '../data/project';

	const date = new Date().getFullYear();
</script>

<main class="bg-neutral-50 dark:bg-neutral-900">
	<CustomNav />
	<Hero
		linkedInUrl="https://www.linkedin.com/in/nizamovruslan/"
		githubUrl="https://github.com/neezzzy"
	/>
	<About />
	<Projects {projects} />
	<DeveloperToolbox />
	<HowIBuild />
	<LearningFocus />
	<Footer {date} />
</main>

<style>
	/* GLOBAL STYLES */
	:root {
		--primary-color: #0891b2;
		--black: #292929;
		--color-link: #0e7490;
		--surface-color: #292929;
		--card-title: #0e7490;
		--card-tech: #e3e3e3;
		--card-description: #c6c6c6d3;
		--text-color: #313131;
		--text-footer-color: #f5f5f5;
	}

	:global(ul) {
		padding: 0;
		list-style-type: none;
	}

	:global(a) {
		text-decoration: none;
	}

	:global(b) {
		color: var(--card-title);
	}
</style>
