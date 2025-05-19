const shuffleArray = <T>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

export const getTiles = <T>(tilesCount: number, data: T[]): T[] => {
  const pairCount = tilesCount / 2;
  const items = shuffleArray(data).slice(0, pairCount);
  const shuffledPairs = shuffleArray(items.concat(items));

  return shuffledPairs;
};
