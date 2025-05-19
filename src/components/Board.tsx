import type { FC } from 'react';
import { getBoard } from '../utils/boardUtils';
import { getTilePairId, getTiles } from '../utils/gameUtils';
import { animals } from '../utils/tileData';
import { Tile } from './Tile';

interface Props {
  size: 's' | 'm' | 'l';
}

export const Board: FC<Props> = ({ size }) => {
  const { tilesCount } = getBoard(size);

  const tiles = getTiles(tilesCount, animals);

  return (
    <div className={`board ${size}`}>
      {tiles.map(tile => (
        <Tile key={getTilePairId(tile)} tile={tile} />
      ))}
    </div>
  );
};
