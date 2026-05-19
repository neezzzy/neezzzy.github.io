<script lang="ts">
	import { onMount } from 'svelte';

	type Theme = 'light' | 'dark';

	let theme: Theme = 'light';
	let highContrast = false;
	let largeText = false;
	let menuOpen = false;
	let mounted = false;
	let control: HTMLElement;

	const storageKeys = {
		theme: 'display-theme',
		highContrast: 'display-high-contrast',
		largeText: 'display-large-text'
	};

	function applyPreferences(): void {
		const root = document.documentElement;
		root.classList.toggle('dark', theme === 'dark');
		root.classList.toggle('high-contrast', highContrast);
		root.classList.toggle('contrast-standard', !highContrast);
		root.classList.toggle('large-text', largeText);
	}

	function savePreferences(): void {
		localStorage.setItem(storageKeys.theme, theme);
		localStorage.setItem(storageKeys.highContrast, String(highContrast));
		localStorage.setItem(storageKeys.largeText, String(largeText));
	}

	function setTheme(nextTheme: Theme): void {
		theme = nextTheme;
		applyPreferences();
		savePreferences();
	}

	function toggleHighContrast(): void {
		highContrast = !highContrast;
		applyPreferences();
		savePreferences();
	}

	function toggleLargeText(): void {
		largeText = !largeText;
		applyPreferences();
		savePreferences();
	}

	function closeMenu(event: MouseEvent): void {
		if (!control?.contains(event.target as Node)) {
			menuOpen = false;
		}
	}

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape') {
			menuOpen = false;
		}
	}

	onMount(() => {
		const savedTheme = (localStorage.getItem(storageKeys.theme) ||
			localStorage.getItem('theme')) as Theme | null;
		const savedHighContrast = localStorage.getItem(storageKeys.highContrast);
		const savedLargeText = localStorage.getItem(storageKeys.largeText);
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const prefersMoreContrast = window.matchMedia('(prefers-contrast: more)').matches;

		theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : prefersDark ? 'dark' : 'light';
		highContrast = savedHighContrast === null ? prefersMoreContrast : savedHighContrast === 'true';
		largeText = savedLargeText === 'true';
		mounted = true;

		applyPreferences();
		document.addEventListener('click', closeMenu);

		return () => {
			document.removeEventListener('click', closeMenu);
		};
	});
</script>

<svelte:window on:keydown={handleKeydown} />

<div bind:this={control} class="fixed right-4 top-4 z-50">
	<button
		type="button"
		on:click|stopPropagation={() => (menuOpen = !menuOpen)}
		class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-800 shadow-soft transition-all duration-200 hover:shadow-medium focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-500/70 focus-visible:ring-offset-2 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:focus-visible:ring-offset-neutral-900 high-contrast:border-2 high-contrast:border-current"
		aria-label="Display options"
		aria-haspopup="menu"
		aria-expanded={menuOpen}
	>
		{#if highContrast}
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.25" d="M12 3v18m0-18a9 9 0 0 1 0 18m0-18a9 9 0 0 0 0 18" />
			</svg>
		{:else if theme === 'dark'}
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
			</svg>
		{:else}
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9.003 9.003 0 0 0 12 21a9.003 9.003 0 0 0 8.354-5.646z" />
			</svg>
		{/if}
	</button>

	{#if menuOpen && mounted}
		<div
			class="absolute right-0 mt-3 w-64 rounded-xl border border-neutral-200 bg-white p-3 text-sm text-neutral-800 shadow-large dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 high-contrast:border-2 high-contrast:border-current"
			role="menu"
			aria-label="Display options"
			tabindex="-1"
			on:click|stopPropagation
			on:keydown|stopPropagation
		>
			<p class="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
				Display options
			</p>
			<div class="grid gap-2">
				<button
					type="button"
					class="display-option"
					class:display-option-active={theme === 'light' && !highContrast}
					role="menuitemradio"
					aria-checked={theme === 'light' && !highContrast}
					on:click={() => setTheme('light')}
				>
					<span>Light</span>
					<span aria-hidden="true">{theme === 'light' && !highContrast ? 'On' : ''}</span>
				</button>
				<button
					type="button"
					class="display-option"
					class:display-option-active={theme === 'dark' && !highContrast}
					role="menuitemradio"
					aria-checked={theme === 'dark' && !highContrast}
					on:click={() => setTheme('dark')}
				>
					<span>Dark</span>
					<span aria-hidden="true">{theme === 'dark' && !highContrast ? 'On' : ''}</span>
				</button>
				<button
					type="button"
					class="display-option"
					class:display-option-active={highContrast}
					role="menuitemcheckbox"
					aria-checked={highContrast}
					on:click={toggleHighContrast}
				>
					<span>High contrast</span>
					<span aria-hidden="true">{highContrast ? 'On' : ''}</span>
				</button>
				<button
					type="button"
					class="display-option"
					class:display-option-active={largeText}
					role="menuitemcheckbox"
					aria-checked={largeText}
					on:click={toggleLargeText}
				>
					<span>Larger text</span>
					<span aria-hidden="true">{largeText ? 'On' : ''}</span>
				</button>
			</div>
		</div>
	{/if}
</div>

<style>
	.display-option {
		display: flex;
		min-height: 44px;
		align-items: center;
		justify-content: space-between;
		border-radius: 0.75rem;
		border: 1px solid transparent;
		padding: 0.65rem 0.75rem;
		font-weight: 700;
		color: inherit;
	}

	.display-option:hover,
	.display-option:focus-visible {
		border-color: #0891b2;
		background: #ecfeff;
		outline: none;
	}

	:global(.dark) .display-option:hover,
	:global(.dark) .display-option:focus-visible {
		background: #083344;
	}

	.display-option-active {
		border-color: #0891b2;
		background: #cffafe;
		color: #0f172a;
	}

	:global(.dark) .display-option-active {
		background: #155e75;
		color: #ffffff;
	}

	:global(.high-contrast) .display-option,
	:global(.high-contrast) .display-option-active {
		border-color: currentColor;
		background: transparent;
		color: inherit;
	}
</style>
