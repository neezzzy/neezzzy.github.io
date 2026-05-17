<script lang="ts">
	import type { Project } from '../types/project';
	export let project: Project;
</script>

<article
	class="group card flex h-full w-full max-w-md flex-col overflow-hidden border border-neutral-200/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-large dark:border-neutral-700/80 dark:hover:border-primary-500"
>
	<div class="relative overflow-hidden bg-neutral-100 dark:bg-neutral-900">
		<img
			src={project.image}
			alt={project.title}
			class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
		/>
		<div
			class="absolute inset-x-4 bottom-4 rounded-xl border border-white/20 bg-neutral-950/75 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-soft backdrop-blur transition-opacity duration-300 group-hover:opacity-100"
		>
			{project.hook}
		</div>
	</div>

	<div class="flex flex-1 flex-col p-6">
		<h3
			class="mb-2 text-xl font-heading font-semibold text-neutral-900 transition-colors group-hover:text-primary-700 dark:text-neutral-100 dark:group-hover:text-primary-300"
		>
			{project.title}
		</h3>
		<p class="mb-4 text-sm font-medium text-primary-700 dark:text-primary-300">
			{project.hook}
		</p>

		<div class="mb-4 rounded-xl bg-primary-50 p-4 text-sm text-neutral-700 dark:bg-primary-950/40 dark:text-neutral-300">
			<p class="mb-2 font-semibold text-neutral-900 dark:text-neutral-100">Problem solved</p>
			<p>{project.problem}</p>
		</div>

		<div class="mb-5 flex flex-wrap gap-2">
			{#each project.techStack as tech}
				<span
					class="rounded-full border border-primary-200 bg-white px-3 py-1 text-xs font-semibold text-primary-800 shadow-sm dark:border-primary-800 dark:bg-neutral-900 dark:text-primary-200"
				>
					{tech}
				</span>
			{/each}
		</div>

		<div class="space-y-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
			<p>
				<span class="font-semibold text-neutral-900 dark:text-neutral-100">What I built:</span>
				{project.built}
			</p>
			<p>
				<span class="font-semibold text-neutral-900 dark:text-neutral-100">Technical highlight:</span>
				{project.highlight}
			</p>
		</div>

		<div class="mt-auto flex flex-wrap gap-3 pt-6">
			{#if project.githubUrl}
				<a
					href={project.githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn-secondary inline-flex items-center justify-center gap-2 px-4 py-2 text-sm"
				>
					<img src="icons/github.svg" alt="" class="h-4 w-4 dark:invert" />
					GitHub
				</a>
			{/if}
			{#if project.demoUrl}
				<a
					href={project.demoUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn-primary inline-flex items-center justify-center gap-2 px-4 py-2 text-sm"
				>
					Live Demo
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H9M17 7v8" />
					</svg>
				</a>
			{/if}
		</div>
	</div>
</article>
