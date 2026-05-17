<script lang="ts">
	import type { Project } from '../types/project';
	export let projects: Project[];
	import ProjectCard from '../components/ProjectCard.svelte';
</script>

<section id="projects" class="bg-white px-4 py-20 dark:bg-neutral-800">
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">Featured Projects</h2>
			<p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
				My projects usually start with a real workflow problem: studying faster, seeing data more clearly,
				publishing learning content, or making a small web experience easier to use.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<ProjectCard {project} />
			{/each}
		</div>

		<div class="text-center mt-12">
			<p class="text-neutral-500 dark:text-neutral-400">
				More code and experiments live on <a href="https://github.com/neezzzy" target="_blank" rel="noopener noreferrer"
					class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors">
					GitHub
				</a>
			</p>
		</div>
	</div>
</section>

<style>
</style>
