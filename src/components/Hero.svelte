<script lang="ts">
	export let linkedInUrl: string;
	export let githubUrl: string;

	const badges = ['Web apps', 'Automation', 'Power BI', 'Local agents'];
</script>

<header
	id="home"
	class="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_#cffafe,_transparent_34%),linear-gradient(135deg,_#f8fafc,_#ffffff_45%,_#fff7ed)] dark:bg-[radial-gradient(circle_at_top_left,_rgba(8,145,178,0.28),_transparent_34%),linear-gradient(135deg,_#0f172a,_#111827_50%,_#083344)]"
>
	<section class="h-full">
		<div
			class="mx-auto grid min-h-[calc(100vh-60px)] max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-[1.05fr_0.95fr] lg:px-8"
		>
			<div class="animate-fade-in">
				<p
					class="mb-4 inline-flex rounded-full border border-primary-200 bg-white/80 px-4 py-2 text-sm font-semibold text-primary-800 shadow-sm backdrop-blur dark:border-primary-800 dark:bg-neutral-900/70 dark:text-primary-200"
				>
					Junior developer portfolio
				</p>
				<h1
					class="mb-6 max-w-4xl text-4xl font-heading font-bold leading-tight text-neutral-950 md:text-6xl lg:text-7xl dark:text-white"
				>
					I build practical web tools.
				</h1>
				<p
					class="mb-6 max-w-2xl text-xl font-medium leading-relaxed text-neutral-700 md:text-2xl dark:text-neutral-200"
				>
					Hi, I'm Russell Nizamov, a web developer who likes turning real workflow problems into simple, useful software.
				</p>
				<p class="mb-8 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg dark:text-neutral-300">
					I focus on practical web apps, automation, reporting, and clear documentation so projects are easier to use, test, and improve.
				</p>

				<div class="mb-10 flex flex-wrap gap-3">
					{#each badges as badge}
						<span
							class="rounded-full bg-white/85 px-4 py-2 text-sm font-semibold text-neutral-700 shadow-sm ring-1 ring-neutral-200 backdrop-blur dark:bg-neutral-900/70 dark:text-neutral-200 dark:ring-neutral-700"
						>
							{badge}
						</span>
					{/each}
				</div>

				<div class="flex flex-col gap-4 sm:flex-row">
					<a href="#projects" class="btn-primary inline-flex items-center justify-center gap-2">
						View Projects
					</a>
					<a href={linkedInUrl} target="_blank" rel="noopener noreferrer" class="btn-secondary inline-flex items-center justify-center gap-2">
						<img src="icons/linkedin.svg" alt="" class="h-5 w-5" />
						LinkedIn
					</a>
					<a href={githubUrl} target="_blank" rel="noopener noreferrer" class="btn-secondary inline-flex items-center justify-center gap-2">
						<img src="icons/github.svg" alt="" class="h-5 w-5 dark:invert" />
						GitHub
					</a>
				</div>
			</div>

			<div class="animate-slide-up">
				<div class="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-large dark:border-primary-900">
					<div class="flex items-center gap-2 border-b border-white/10 px-4 py-3">
						<span class="h-3 w-3 rounded-full bg-red-400"></span>
						<span class="h-3 w-3 rounded-full bg-amber-300"></span>
						<span class="h-3 w-3 rounded-full bg-primary-400"></span>
						<span class="ml-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">portfolio.ts</span>
					</div>
					<div class="space-y-4 p-5 font-mono text-sm leading-relaxed text-neutral-100 md:p-6">
						<p><span class="text-primary-300">const</span> focus = ['web apps', 'automation', 'Power BI'];</p>
						<p><span class="text-primary-300">const</span> localLab = ['OpenClaw', 'local LLMs', 'agents'];</p>
						<p><span class="text-primary-300">function</span> build(project) {'{'}</p>
						<p class="pl-4 text-neutral-300">understand(problem);</p>
						<p class="pl-4 text-neutral-300">ship(workingVersion);</p>
						<p class="pl-4 text-neutral-300">testAndDocument(changes);</p>
						<p>{'}'}</p>
						<p class="text-neutral-500">// audiobook fuel: Project Hail Mary + Ready Player One</p>
						<p class="border-t border-white/10 pt-4 text-accent-300">ready for junior dev, QA automation, and web app roles</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</header>
