const { test, expect } = require('@playwright/test');

test('access gmail page', async ({ page }) => {
    await page.goto('https://mail.google.com/');
    await expect(page).toHaveTitle('Gmail');
    await page.fill('#identifierId', 'fortestg518@gmail.com');
    await page.click('text=Next');
    await page.fill('input[type="password"]', '201296a@N');
    await page.click('text=Next');
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.waitForTimeout(2000);
    await page.waitForSelector('text=COMPOSE');
    await page.click('text=COMPOSE');

    const divs = await page.$$('div');
    let index;
    for (let i = 0; i < divs.length; i++) {
        const text = await divs[i].innerText();
        if (text.includes('Recipients')) {
            index = i - 1;
            break;
        }
    }
    if (index !== undefined && index >= 0) {
        await divs[index].click();
    }

    await page.fill('input[name="To recipients"]', 'narabarroscruz@gmail.com');
});

