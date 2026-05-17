<script>
	import Carousel from './Carousel.svelte';
</script>

<section id="about" class="bg-neutral-50 px-4 py-20 dark:bg-neutral-900">
	<div class="max-w-4xl mx-auto">
		<div class="card mb-12 border border-neutral-200/80 p-8 md:p-12 dark:border-neutral-700/80">
			<div class="text-center mb-8">
				<h2 class="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">About Me</h2>
				<p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
					I like building tools that make tasks easier to understand, use, and improve.
				</p>
			</div>

			<div class="space-y-6 text-neutral-700 dark:text-neutral-300">
				<p class="text-lg leading-relaxed">
					Since discovering programming six years ago, I have kept coming back to projects that solve a clear
					workflow problem: study tools, dashboards, learning modules, and small web apps that help people get
					something done.
				</p>

				<p class="text-lg leading-relaxed">
					With a Master's Degree in Education and an Advanced Software Development certificate, I bring a
					mix of learning design and software development practice. That background helps me think about
					clear instructions, user flow, and documentation alongside the code.
				</p>

				<p class="text-lg leading-relaxed">
					My current work includes React, Svelte, JavaScript, TypeScript, Python, Node.js, PHP, Flask, MongoDB,
					and MySQL. I am still growing as a developer, with a focus on practical apps, automation, testing,
					and deployment workflows.
				</p>

				<p class="text-lg leading-relaxed">
					This portfolio highlights the kind of work I want to keep doing: useful interfaces, clear technical
					choices, and projects that are easy to explain to another person.
				</p>
			</div>
		</div>

		<div class="card border border-neutral-200/80 p-8 dark:border-neutral-700/80">
			<h3 class="text-2xl font-heading font-semibold mb-6 text-center text-neutral-800 dark:text-neutral-200">
				Stack Snapshot
			</h3>
			<Carousel autoplay={3000} />
		</div>
	</div>
</section>
