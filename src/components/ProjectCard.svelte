<script lang="ts">
	import type { Project } from '../types/project';
	import { Heading, P } from 'flowbite-svelte';
	export let project: Project;
</script>

<a
	href={project.link}
	target="_blank"
	rel="noopener noreferrer"
	class="group card w-full max-w-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-large"
>
	<div class="relative overflow-hidden">
		<img
			src={project.image}
			alt={project.title}
			class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
		/>
		<div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
	</div>

	<div class="p-6">
		<h3 class="text-xl font-heading font-semibold mb-3 text-neutral-800 dark:text-neutral-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
			{project.title}
		</h3>
		<p class="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
			{project.description}
		</p>

		<div class="flex items-center justify-between">
			<span class="text-sm text-primary-600 dark:text-primary-400 font-medium">
				View Project →
			</span>
			<div class="flex items-center space-x-1">
				<svg class="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
				</svg>
			</div>
		</div>
	</div>
</a>
