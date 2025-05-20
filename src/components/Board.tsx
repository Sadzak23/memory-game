import type { FC } from 'react';
import { getBoard } from '../utils/boardUtils';
import { getTilePairId, getTiles } from '../utils/gameUtils';
import { Tile } from './Tile';
import { useMainContext } from '../contexts/MainContext';
import { tileSets } from '../utils/tileData';

export const Board: FC = () => {
  const { boardSize, tileSet } = useMainContext();
  const { tilesCount } = getBoard(boardSize);
  const tiles = getTiles(tilesCount, tileSets[tileSet]);

  return (
    <div className={`board ${boardSize}`}>
      {tiles.map(tile => (
        <Tile key={getTilePairId(tile)} tile={tile} />
      ))}
    </div>
  );
};
