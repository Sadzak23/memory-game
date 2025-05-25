import type { IBoardSize, ITile, ITileSet } from '../types/IGame';
import { tileSets } from './tileData';

export const tilesCount: Record<IBoardSize, number> = {
  s: 12, //  4*3
  m: 32, //  8*4
  l: 50, // 10*5
};

const shuffleArray = <T>(array: T[]): T[] => [...array].sort(() => Math.random() - 0.5);

export const getTiles = (boardSize: IBoardSize, tilesSet: ITileSet): ITile[] => {
  const pairCount = tilesCount[boardSize] / 2;
  const items: ITile[] = shuffleArray(tileSets[tilesSet])
    .slice(0, pairCount)
    .map(item => ({ ...item, pair: 'a' }));
  const itemPairs: ITile[] = items.map(item => ({ ...item, pair: 'b' }));
  const shuffledPairs = shuffleArray(items.concat(itemPairs));

  return shuffledPairs;
};

export const getTilePairId = (tile: ITile | null) =>
  tile ? tile.id + tile.pair : undefined;
