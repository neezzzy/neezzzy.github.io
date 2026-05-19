import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'I build practical workflow tools.' })).toBeVisible();
	await expect(page.getByText('Recruiter Snapshot')).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Definitive Jiu Jitsu' })).toBeVisible();
});
