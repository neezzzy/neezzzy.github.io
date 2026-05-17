<script lang="ts">
	const steps = [
		{
			number: '01',
			title: 'Understand the problem',
			text: 'Start with the workflow, user goal, and what would make the task easier.'
		},
		{
			number: '02',
			title: 'Build a working version',
			text: 'Get the core path running first, then shape the interface around it.'
		},
		{
			number: '03',
			title: 'Test and debug',
			text: 'Check behavior, edge cases, responsiveness, and anything that feels fragile.'
		},
		{
			number: '04',
			title: 'Improve usability',
			text: 'Tighten labels, spacing, feedback states, and the steps a user repeats.'
		},
		{
			number: '05',
			title: 'Document what changed',
			text: 'Leave notes, setup steps, and decisions clear enough for the next pass.'
		}
	];
</script>

<section id="process" class="bg-white px-4 py-20 dark:bg-neutral-800">
	<div class="mx-auto max-w-6xl">
		<div class="mb-12 text-center">
			<p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">
				How I Build
			</p>
			<h2 class="mb-5 text-4xl font-heading font-bold text-neutral-950 md:text-5xl dark:text-white">
				A simple process for making useful things.
			</h2>
			<p class="mx-auto max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
				My best projects are practical and iterative: understand the task, make the first version work, then improve the details.
			</p>
		</div>

		<div class="grid gap-5 md:grid-cols-5">
			{#each steps as step}
				<article
					class="card border border-neutral-200/80 p-5 hover:-translate-y-1 hover:border-primary-300 hover:shadow-medium dark:border-neutral-700/80 dark:hover:border-primary-500"
				>
					<p class="mb-4 font-mono text-sm font-bold text-primary-700 dark:text-primary-300">{step.number}</p>
					<h3 class="mb-3 text-lg font-heading font-semibold text-neutral-900 dark:text-neutral-100">
						{step.title}
					</h3>
					<p class="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{step.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>
