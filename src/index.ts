import puppeteer from "puppeteer";
import { randomizeItemList, randomizeCoins } from "./functions";
import { urlArray } from "./urls";
import { coins, itemList } from "./parameters";

const [kabum, binance] = urlArray;
const items = randomizeItemList(itemList);
const coin = randomizeCoins(coins);

function delay(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto(`${kabum}${items}`);
  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight);
  });
  await delay(3000);
  await page.screenshot({ path: "example.png" });

  await page.goto(`${binance}/${coin}`);
  await delay(3000);
  await page.screenshot({ path: "example2.png" });
  await browser.close();
})();
