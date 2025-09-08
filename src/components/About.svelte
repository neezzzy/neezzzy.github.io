<script>
	import Carousel from './Carousel.svelte';
	import { Heading, P } from 'flowbite-svelte';
</script>

<section id="about" class="py-20 px-4 bg-neutral-50 dark:bg-neutral-900">
	<div class="max-w-4xl mx-auto">
		<div class="card p-8 md:p-12 mb-12">
			<div class="text-center mb-8">
				<h2 class="text-4xl md:text-5xl font-heading font-bold mb-6 text-gradient">About Me</h2>
				<p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
					Passionate about creating digital experiences that matter
				</p>
			</div>

			<div class="space-y-6 text-neutral-700 dark:text-neutral-300">
				<p class="text-lg leading-relaxed">
					Since discovering programming six years ago, I've been captivated by the art of building websites,
					creating interactive games, and developing solutions that address real-world challenges. What started
					as a curiosity has evolved into a fulfilling career path.
				</p>

				<p class="text-lg leading-relaxed">
					With a Master's Degree in Education and an Advanced Software Development certificate, I bring a
					unique blend of pedagogical insight and technical expertise to every project. My journey has
					equipped me with the skills to not just write code, but to create meaningful user experiences.
				</p>

				<p class="text-lg leading-relaxed">
					Over the past few years, I've mastered modern web technologies including React, JavaScript, Python,
					and Bootstrap for frontend development, complemented by Node.js, PHP, and Flask for robust backend
					solutions. I'm constantly expanding my knowledge through platforms like LinkedIn Learning, Udemy,
					and Coursera.
				</p>

				<p class="text-lg leading-relaxed">
					My current tech stack includes the latest tools and frameworks that enable me to build scalable,
					efficient, and beautiful applications. Here's what I work with:
				</p>
			</div>
		</div>

		<div class="card p-8">
			<h3 class="text-2xl font-heading font-semibold mb-6 text-center text-neutral-800 dark:text-neutral-200">
				Tech Stack
			</h3>
			<Carousel autoplay={3000} />
		</div>
	</div>
</section>