import type { FC } from 'react';
import { getBoard } from '../utils/boardUtils';

interface Props {
  size: 's' | 'm' | 'l';
}

export const Board: FC<Props> = ({ size }) => {
  const { tilesCount } = getBoard(size);

  const tiles = Array.from({ length: tilesCount }, (_, i) => i + 1);

  return (
    <div className={`board ${size}`}>
      {tiles.map(tile => (
        <div className="tile">{tile}</div>
      ))}
    </div>
  );
};
