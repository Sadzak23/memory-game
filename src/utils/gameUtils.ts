import type { ITile } from '../types/IGame';

const shuffleArray = <T>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

export const getTiles = (tilesCount: number, data: ITile[]): ITile[] => {
  const pairCount = tilesCount / 2;
  const items: ITile[] = shuffleArray(data)
    .slice(0, pairCount)
    .map(item => ({ ...item, pair: 'a' }));
  const itemPairs: ITile[] = items.map(item => ({ ...item, pair: 'b' }));
  const shuffledPairs: ITile[] = shuffleArray(items.concat(itemPairs));

  return shuffledPairs;
};

export const getTilePairId = (tile: ITile | null) =>
  tile ? tile.id + tile.pair : undefined;
