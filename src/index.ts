import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto("https://github.com/Leoff00/Webscrap-sales");
  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
