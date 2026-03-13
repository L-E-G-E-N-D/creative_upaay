const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('console', msg => {
        console.log(`[CONSOLE ${msg.type().toUpperCase()}] ${msg.text()}`);
    });

    page.on('pageerror', err => {
        console.log('PAGE ERROR:', err.message);
    });

    page.on('requestfailed', request => {
        console.log(`REQUEST FAILED: ${request.url()} - ${request.failure()?.errorText}`);
    });

    try {
        await page.goto('http://localhost:5174', { waitUntil: 'networkidle0' });
        console.log('Page loaded successfully');

        // Wait for a second to see if React throws runtime errors after mount
        await new Promise(r => setTimeout(r, 2000));
    } catch (e) {
        console.log('Navigation error:', e.message);
    }

    await browser.close();
})();
