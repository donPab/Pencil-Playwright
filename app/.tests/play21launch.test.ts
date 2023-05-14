import { test, expect } from '@playwright/test';
import { _electron } from 'playwright';

test('App launches', async ({ page }) => {
    
    console.log("psg-play21launch-b4");
    const app = await _electron.launch({
      args: ['C:\\H_Paul\\Pencil\\pencil-312-05myDev\\pencil\\app\\index.js', '--enable-dev --enable-transparent-visuals'],
      cwd: 'C:\\H_Paul\\Pencil\\pencil-312-05myDev\\pencil\\app\\'
    });
    console.log("psg-play21launch-af");
    await page.pause();

    const window = await app.  firstWindow();
    await expect(await window.title()).toContain('Pencil');
    await app.waitForEvent('window', { timeout: 4 * 59 * 1000 });   // ~~ 4 minutes
    console.log("psg-play21launch-next" + window.title());

    await expect(await window.title()).toContain('PENCIL');

    const count = await  page.getByAltText('menu').count();
    console.log("psg-play21-count"+count);

    const xx = await page.pause();
    await page.screenshot({ path: 'play21launch.png' })  
    await app.close();
});
