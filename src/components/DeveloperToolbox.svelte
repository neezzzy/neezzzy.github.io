<script lang="ts">
	const groups = [
		{
			title: 'Frontend',
			icon: 'icons/react.svg',
			items: ['Svelte', 'React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Responsive UI']
		},
		{
			title: 'Backend',
			icon: 'icons/node-js.svg',
			items: ['Node.js', 'Python', 'PHP', 'Flask', 'API basics']
		},
		{
			title: 'Databases',
			icon: 'icons/mongodb.svg',
			items: ['MongoDB', 'MySQL', 'Data modeling', 'CRUD workflows']
		},
		{
			title: 'Testing / Automation',
			icon: 'icons/python.svg',
			items: ['Playwright', 'Vitest', 'Debugging', 'Automation scripts', 'QA thinking']
		},
		{
			title: 'Tools',
			icon: 'icons/git.svg',
			items: ['Git', 'GitHub', 'GitHub Pages', 'VS Code', 'Deployment workflows']
		}
	];
</script>

<section id="toolbox" class="bg-neutral-50 px-4 py-20 dark:bg-neutral-900">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 max-w-3xl">
			<p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">
				Developer Toolbox
			</p>
			<h2 class="mb-5 text-4xl font-heading font-bold text-neutral-950 md:text-5xl dark:text-white">
				The tools I reach for when a project needs to become real.
			</h2>
			<p class="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
				I am building range across frontend, backend, data, testing, and deployment so I can contribute to practical web app work from more than one angle.
			</p>
		</div>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
			{#each groups as group}
				<article
					class="card border border-neutral-200/80 p-6 hover:-translate-y-1 hover:border-primary-300 hover:shadow-medium dark:border-neutral-700/80 dark:hover:border-primary-500"
				>
					<div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 ring-1 ring-primary-100 dark:bg-primary-950/50 dark:ring-primary-800">
						<img src={group.icon} alt="" class="h-7 w-7 object-contain" />
					</div>
					<h3 class="mb-4 text-xl font-heading font-semibold text-neutral-900 dark:text-neutral-100">
						{group.title}
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each group.items as item}
							<span
								class="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
							>
								{item}
							</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
