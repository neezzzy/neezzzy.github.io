import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'I build practical workflow tools.' })).toBeVisible();
	await expect(page.getByText('Recruiter Snapshot')).toBeVisible();
	await expect(page.getByRole('heading', { name: 'Definitive Jiu Jitsu' })).toBeVisible();
	await page.getByRole('button', { name: 'Display options' }).click();
	await expect(page.getByRole('menu', { name: 'Display options' })).toBeVisible();
	await page.getByRole('menuitemcheckbox', { name: 'High contrast' }).click();
	await expect(page.locator('html')).toHaveClass(/high-contrast/);
	await page.getByRole('menuitemcheckbox', { name: 'Larger text' }).click();
	await expect(page.locator('html')).toHaveClass(/large-text/);
});
