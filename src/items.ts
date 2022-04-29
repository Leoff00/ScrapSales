export function randomizeItemList(): string {
  const queryList = ["ssd", "monitor", "TV"];

  const randomizer = Math.floor(Math.random() * queryList.length);

  return queryList[randomizer];
}
