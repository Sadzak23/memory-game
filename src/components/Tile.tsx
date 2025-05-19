import type { FC } from 'react';

interface Props {
  tile: string;
}

export const Tile: FC<Props> = ({ tile }) => {
  return <div className="tile">{tile}</div>;
};
