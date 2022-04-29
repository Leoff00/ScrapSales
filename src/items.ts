function randomizeItemList(): string {
  const queryList = ["ssd", "monitor", "TV"];
  const randomizer = Math.floor(Math.random() * queryList.length);

  return queryList[randomizer];
}

function randomizeURL(url: string[]): string {
  const randomizer = Math.floor(Math.random() * url.length);
  return url[randomizer];
}

export { randomizeItemList, randomizeURL };
