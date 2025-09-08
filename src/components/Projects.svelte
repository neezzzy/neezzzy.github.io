<script lang="ts">
	import type { Project } from '../types/project';
	export let projects: Project[];
	import { Heading, P } from 'flowbite-svelte';
	import ProjectCard from '../components/ProjectCard.svelte';
</script>

<section id="projects" class="py-20 px-4 bg-white dark:bg-neutral-800">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">Featured Projects</h2>
			<p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
				A showcase of my recent work, demonstrating versatility across different technologies and domains.
				Each project represents a unique challenge and learning opportunity.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>

		<div class="text-center mt-12">
			<p class="text-neutral-500 dark:text-neutral-400">
				More projects available on <a href="https://github.com/neezzzy" target="_blank" rel="noopener noreferrer"
					class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors">
					GitHub
				</a>
			</p>
		</div>
	</div>
</section>

<style>
</style>
