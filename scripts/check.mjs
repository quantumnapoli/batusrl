import { chromium } from 'playwright-core';
const base = 'http://127.0.0.1:4173';
const pages = ['/', '/lavori/', '/lavori/giardino-sul-mare-patu/', '/lavori/archivio-di-stato-napoli/', '/stampa/', '/bio/'];
const shots = process.argv[2] || '.';
import { mkdirSync } from 'node:fs'; mkdirSync(shots, { recursive: true });
// I font esterni vengono bloccati: in sandbox non c'è rete, e non fanno parte del sito.
const blockFonts = (ctx) => ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.fulfill({ status: 200, contentType: 'text/css', body: '' }));
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
let problems = 0;
for (const [label, opts] of [['desktop', { viewport: { width: 1440, height: 900 } }], ['mobile', { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }], ['reduced', { viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' }]]) {
  const ctx = await browser.newContext(opts); await blockFonts(ctx);
  for (const p of pages) {
    const page = await ctx.newPage();
    const errs = [];
    page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) errs.push(`${m.type()}: ${m.text()}`); });
    page.on('pageerror', (e) => errs.push('pageerror: ' + e.message));
    page.on('requestfailed', (r) => { if (r.url().startsWith(base)) errs.push('requestfailed: ' + r.url()); });
    page.on('response', (r) => { if (r.url().startsWith(base) && r.status() >= 400) errs.push(`${r.status()} ${r.url()}`); });
    await page.goto(base + p, { waitUntil: 'load' });
    await page.waitForTimeout(600);
    // scorri fino in fondo a passi, per attivare i reveal e lo stacking
    const h = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < h; y += 500) { await page.evaluate((y) => window.scrollTo(0, y), y); await page.waitForTimeout(80); }
    await page.waitForTimeout(800);
    // controlli: overflow orizzontale, immagini caricate, elementi ancora invisibili
    const check = await page.evaluate(() => ({
      overflowX: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      brokenImgs: [...document.images].filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.src),
      hidden: [...document.querySelectorAll('[data-reveal], .statement .line > span')].filter((e) => getComputedStyle(e).opacity === '0' || getComputedStyle(e).transform.includes('110')).length,
      mainOpacity: getComputedStyle(document.querySelector('.main')).opacity,
      lenis: !!window.lenis,
      title: document.title,
    }));
    const bad = errs.length || check.overflowX || check.brokenImgs.length || check.hidden || check.mainOpacity !== '1';
    if (bad) problems++;
    console.log(`${bad ? 'FAIL' : 'ok  '} ${label.padEnd(8)} ${p.padEnd(40)} lenis=${check.lenis} hidden=${check.hidden} ovx=${check.overflowX} imgs=${check.brokenImgs.length} ${errs.join(' | ')}`);
    if (label !== 'reduced') {
      await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(400);
      await page.screenshot({ path: `${shots}/${label}-${p.replace(/\//g, '_') || 'home'}-top.png` });
      if (p === '/') { await page.evaluate(() => window.scrollTo(0, window.innerHeight * 1.5)); await page.waitForTimeout(600); await page.screenshot({ path: `${shots}/${label}-home-stack.png` });
        await page.evaluate(() => window.scrollTo(0, window.innerHeight * 4.3)); await page.waitForTimeout(1200); await page.screenshot({ path: `${shots}/${label}-home-statement.png` }); }
    }
    await page.close();
  }
  await ctx.close();
}
// menu mobile + header hide
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }); await blockFonts(ctx);
const page = await ctx.newPage();
await page.goto(base + '/bio/', { waitUntil: 'load' }); await page.waitForTimeout(500);
await page.evaluate(() => window.scrollTo(0, 800)); await page.waitForTimeout(900);
const hiddenDown = await page.evaluate(() => document.querySelector('.header').classList.contains('is-hidden'));
await page.evaluate(() => window.scrollTo(0, 500)); await page.waitForTimeout(900);
const shownUp = await page.evaluate(() => !document.querySelector('.header').classList.contains('is-hidden'));
await page.click('.menu-btn'); await page.waitForTimeout(900);
const menuVisible = await page.evaluate(() => getComputedStyle(document.getElementById('menu')).visibility === 'visible' && document.body.classList.contains('menu-open'));
await page.screenshot({ path: `${shots}/mobile-menu.png` });
await page.keyboard.press('Escape'); await page.waitForTimeout(700);
const menuClosed = await page.evaluate(() => !document.body.classList.contains('menu-open'));
console.log(`header hide on down=${hiddenDown} show on up=${shownUp} menu open=${menuVisible} esc close=${menuClosed}`);
if (!(hiddenDown && shownUp && menuVisible && menuClosed)) problems++;
await browser.close();
console.log(problems ? `PROBLEMI: ${problems}` : 'TUTTO OK');
