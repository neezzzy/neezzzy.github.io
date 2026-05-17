<script lang="ts">
	const focusAreas = [
		'Testing and automation',
		'Svelte and React projects',
		'Backend and database design',
		'Deployment and GitHub workflows'
	];
</script>

<section class="bg-neutral-50 px-4 py-20 dark:bg-neutral-900">
	<div
		class="mx-auto grid max-w-6xl gap-8 rounded-2xl border border-primary-100 bg-white p-8 shadow-soft md:grid-cols-[0.9fr_1.1fr] md:p-10 dark:border-primary-900 dark:bg-neutral-800"
	>
		<div>
			<p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">
				Currently Improving
			</p>
			<h2 class="mb-5 text-3xl font-heading font-bold text-neutral-950 md:text-4xl dark:text-white">
				Keeping the portfolio honest and active.
			</h2>
			<p class="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
				I am looking for junior roles where I can keep improving through real code reviews, practical tasks, and thoughtful debugging.
			</p>
		</div>

		<div class="grid gap-4 sm:grid-cols-2">
			{#each focusAreas as area}
				<div
					class="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm font-semibold text-neutral-800 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
				>
					<span class="mb-3 block h-1.5 w-10 rounded-full bg-primary-500"></span>
					{area}
				</div>
			{/each}
		</div>
	</div>
</section>
