<script lang="ts">
	const roleFit = [
		'Business systems',
		'Internal tools',
		'Workflow automation',
		'Dashboards',
		'Junior web development'
	];

	const strengths = [
		'Practical implementation',
		'Structured workflow thinking',
		'Debugging and testing habits',
		'CMS setup and launch work',
		'Clear documentation'
	];

	const proofPoints = [
		'JobOps: local-first workflow tracker with structured data and dashboard summaries.',
		'AI Meeting Intelligence Tool: transcript-to-actions interface with exportable results.',
		'ParkWise BC: rule-based plain-English interface for local parking sign wording.',
		'Definitive Jiu Jitsu: real-world WordPress setup and launch for a local business.'
	];
</script>

<section class="bg-neutral-50 px-4 py-20 dark:bg-neutral-900">
	<div
		class="mx-auto grid max-w-6xl gap-8 rounded-2xl border border-primary-100 bg-white p-8 shadow-soft lg:grid-cols-[0.9fr_1.1fr] md:p-10 dark:border-primary-900 dark:bg-neutral-800"
	>
		<div class="flex flex-col justify-between gap-8">
			<div>
				<p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">
					Recruiter Snapshot
				</p>
				<h2 class="mb-5 text-3xl font-heading font-bold text-neutral-950 md:text-4xl dark:text-white">
					Useful for business systems, workflow tools, and junior web app roles.
				</h2>
				<p class="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
					I am based near Vancouver and open to remote or Vancouver-area opportunities where practical implementation, clear workflows, and real delivery matter.
				</p>
			</div>

			<div class="flex flex-wrap gap-3">
				<a href="#projects" class="btn-primary inline-flex items-center justify-center">Featured Projects</a>
				<a
					href="https://www.linkedin.com/in/nizamovruslan/"
					target="_blank"
					rel="noopener noreferrer"
					class="btn-secondary inline-flex items-center justify-center"
				>
					LinkedIn
				</a>
				<a
					href="https://github.com/neezzzy"
					target="_blank"
					rel="noopener noreferrer"
					class="btn-secondary inline-flex items-center justify-center"
				>
					GitHub
				</a>
			</div>
		</div>

		<div class="grid gap-5">
			<div class="grid gap-4 sm:grid-cols-2">
				<article
					class="rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-neutral-900"
				>
					<h3 class="mb-4 text-lg font-heading font-semibold text-neutral-900 dark:text-neutral-100">
						Role Fit
					</h3>
					<div class="flex flex-wrap gap-2">
						{#each roleFit as item}
							<span
								class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-neutral-700"
							>
								{item}
							</span>
						{/each}
					</div>
				</article>

				<article
					class="rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-neutral-900"
				>
					<h3 class="mb-4 text-lg font-heading font-semibold text-neutral-900 dark:text-neutral-100">
						What I Bring
					</h3>
					<ul class="space-y-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
						{#each strengths as strength}
							<li class="flex gap-2">
								<span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500"></span>
								<span>{strength}</span>
							</li>
						{/each}
					</ul>
				</article>
			</div>

			<p class="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-700 dark:text-primary-300">
				Proof Points
			</p>
			<div class="grid gap-3">
				{#each proofPoints as point}
					<div
						class="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm font-medium leading-relaxed text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
					>
						<span class="mb-3 block h-1.5 w-10 rounded-full bg-primary-500"></span>
						{point}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
