import type { FC } from 'react';
import { getTilePairId, getTiles } from '../utils/gameUtils';
import { Tile } from './Tile';
import { useMainContext } from '../contexts/MainContext';

export const Board: FC = () => {
  const { boardSize, tileSet } = useMainContext();
  const tiles = getTiles(boardSize, tileSet);

  return (
    <div className={`board ${boardSize}`}>
      {tiles.map(tile => (
        <Tile key={getTilePairId(tile)} tile={tile} />
      ))}
    </div>
  );
};
