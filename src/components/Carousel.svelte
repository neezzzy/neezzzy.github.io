<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import Siema from 'siema';
	export let perPage: number | Record<string, number> = 3;
	export let loop = true;
	export let autoplay = 0;
	export let duration = 200;
	export let easing = 'ease-out';
	export let startIndex = 0;
	export let draggable = true;
	export let multipleDrag = true;
	export let threshold = 20;
	export let rtl = false;
	let siema: HTMLElement;
	let controller: Siema;
	let timer: NodeJS.Timeout;
	let icons = [
		'icons/css.svg',
		'icons/java.svg',
		'icons/js.svg',
		'icons/mongodb.svg',
		'icons/mysql-logo.svg',
		'icons/node-js.svg',
		'icons/php-logo.svg',
		'icons/python.svg',
		'icons/react.svg',
		'icons/svelte.svg',
		'icons/typescript.svg',
		'icons/react-native.svg'
	];
	const dispatch = createEventDispatcher();

	let currentIndex = startIndex;
	let pips: HTMLElement[] = [];
	let currentPerPage = typeof perPage === 'number' ? perPage : 1;

	onMount(() => {
		controller = new Siema({
			selector: siema,
			perPage: typeof perPage === 'object' ? perPage : Number(perPage),
			loop,
			duration,
			easing,
			startIndex,
			draggable,
			multipleDrag,
			threshold,
			rtl,
			onChange: handleChange
		});

		if (autoplay) {
			timer = setInterval(right, autoplay);
		}

		return () => {
			clearInterval(timer);
			controller.destroy();
		};
	});

	function handleChange(): void {
		currentIndex = controller.currentSlide;
		dispatch('change', {
			currentSlide: controller.currentSlide,
			slideCount: siema.children.length
		});
	}

	export function isDotActive(dotIndex: number): boolean {
		const adjustedIndex = currentIndex < 0 ? pips.length + Number(currentIndex) : currentIndex;
		return (
			adjustedIndex >= dotIndex * currentPerPage &&
			adjustedIndex < dotIndex * currentPerPage + currentPerPage
		);
	}

	export function left(): void {
		controller.prev();
	}

	export function right(): void {
		controller.next();
	}

	export function go(index: number): void {
		controller.goTo(index);
	}
</script>

<div class="carousel">
	<div class="slides" bind:this={siema}>
		{#each icons as icon, index (index)}
			<div class="stack-icon">
				<img src={icon} alt={`Icon ${index}`} />
			</div>
		{/each}
	</div>
</div>

<style>
	.carousel {
		overflow: hidden;
	}
	.stack-icon img {
		width: 50%;
		height: auto;
		object-fit: contain;
	}
</style>
