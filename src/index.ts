import puppeteer from "puppeteer";
import { randomizeItemList, randomizeURL } from "./items";
import { urlArray } from "./urls";

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

  await page.screenshot({ path: "example.png" });

  await browser.close();
})();
