import { test, expect } from '@playwright/test';

test('check console errors', async ({ page }) => {
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push(msg.text());
        }
    });

    await page.goto('http://localhost:5173/');

    await page.waitForTimeout(2000);

    if (errors.length > 0) {
        console.log('--- CONSOLE ERRORS FOUND ---');
        errors.forEach(e => console.log(e));
    } else {
        console.log('--- NO ERRORS FOUND ---');
    }
});
