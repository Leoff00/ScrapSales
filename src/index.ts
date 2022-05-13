import puppeteer from "puppeteer";
import cron from "node-cron";
import { randomizeItemList, randomizeCoins } from "./functions";
import { urlArray } from "./urls";
import { coins, itemList } from "./parameters";
import { dispatch } from "./mailer";

const [kabum, binance] = urlArray;
const items = randomizeItemList(itemList);
const coin = randomizeCoins(coins);

function delay(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

function main() {
  cron.schedule("0, 1", async () => {
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
    const print1 = (await page.screenshot()).toString("base64");

    await page.goto(`${binance}/${coin}`);
    await delay(3000);

    const print2 = (await page.screenshot()).toString("base64");
    await delay(3000);

    await dispatch(print1, print2);
    await browser.close();
  });
}

main();
