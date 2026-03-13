const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    page.on('console', msg => {
        if (msg.type() === 'error') {
            console.log(`[CONSOLE ERROR] ${msg.text()}`);
        }
    });

    page.on('pageerror', err => {
        console.log('PAGE ERROR:', err.message);
    });

    try {
        await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
        console.log('Page loaded successfully');

        // Find the add task button and click it
        console.log('Clicking add task button...');
        await page.waitForSelector('button .lucide-plus');

        // Specifically click the plus button on the To Do column
        const buttons = await page.$$('button:has(.lucide-plus)');
        if (buttons.length > 0) {
            await buttons[1].click(); // Assuming the first one is the "Invite" button
        }

        await new Promise(r => setTimeout(r, 1000));

        // Type in a task title
        console.log('Typing task title...');
        await page.type('input[placeholder="Enter task title"]', 'Test Task');

        // Click submit
        console.log('Clicking submit...');
        await page.click('button[type="submit"]');

        await new Promise(r => setTimeout(r, 1000));

        console.log('Done!');
    } catch (e) {
        console.log('Navigation or interaction error:', e.message);
    }

    await browser.close();
})();
