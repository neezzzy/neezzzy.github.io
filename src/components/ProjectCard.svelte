<script lang="ts">
	import type { Project } from '../types/project';
	import { Heading, P } from 'flowbite-svelte';
	export let project: Project;
</script>

<a
	href={project.link}
	class="w-72 bg-gray-100 dark:bg-slate-600 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
>
	<img src={project.image} alt={project.title} class="h-80 w-72 object-cover rounded-t-xl" />

	<div class="px-4 py-3 w-72">
		<div class="flex items-center">
			<div class="flex flex-col justify-between px-4 py-6">
				<Heading
					class="block mb-4 text-lg text-gray-500 dark:text-gray-100 leading-tight hover:text-blue-600 dark:hover:text-indigo-500"
				>
					{project.title}
				</Heading>
				<P class="mb-4 text-gray-500">
					{project.description}
				</P>
			</div>
		</div>
	</div>
</a>
