import { useGameContext } from '../contexts/GameContext';
import type { FC } from 'react';
import type { ITile } from '../types/IGame';
import { getTilePairId } from '../utils/gameUtils';
import clsx from 'clsx';

interface Props {
  tile: ITile;
}

export const Tile: FC<Props> = ({ tile }) => {
  const { tile1, tile2, matchedTiles, onTileClick } = useGameContext();

  const tilePairId = getTilePairId(tile);
  const tile1PairId = getTilePairId(tile1);
  const tile2PairId = getTilePairId(tile2);

  const matched = matchedTiles.includes(tile.id);
  const flipped = tilePairId === tile1PairId || tilePairId === tile2PairId || matched;

  return (
    <div
      className={clsx('tile', { flipped, matched })}
      onClick={!flipped ? () => onTileClick(tile) : undefined}
    >
      <div className="front"></div>
      <div className="back">{tile.value}</div>
    </div>
  );
};
