function randomizeItemList(items: string[]): string {
  const randomizer = Math.floor(Math.random() * items.length);
  return items[randomizer];
}

function randomizeCoins(coins: string[]): string {
  const randomizer = Math.floor(Math.random() * coins.length);
  return coins[randomizer];
}

export { randomizeItemList, randomizeCoins };
