import puppeteer from "puppeteer";
import { randomizeItemList } from "./items";

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();

  await page.setViewport({
    hasTouch: false,
    width: 1000,
    height: 1000,
    deviceScaleFactor: 1,
    isLandscape: true,
  });
  await page.goto(
    `https://www.kabum.com.br/busca?query=${randomizeItemList()}`
  );
  const scrollBottom = page.waitForFunction(
    "window.scrollTo(0, document.body.scrollHeight);"
  );
  await scrollBottom;

  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
