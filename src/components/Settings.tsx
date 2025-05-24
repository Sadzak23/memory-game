import type { FC } from 'react';
import { tileSets } from 'src/utils/tileData';
import clsx from 'clsx';
import type { IBoardSize, ITileSet } from 'src/types/IGame';
import { useMainContext } from 'src/contexts/MainContext';

export const Settings: FC = () => {
  const { boardSize, setBoardSize, tileSet, setTileSet } = useMainContext();

  const tileSetsOptions = Object.entries(tileSets).map(([key, value]) => ({
    id: key,
    value: value[0].value,
  }));

  const sizeOptions = [
    { id: 's', value: 'Small' },
    { id: 'm', value: 'Medium' },
    { id: 'l', value: 'Large' },
  ];

  return (
    <>
      <div className="settings-section">
        <h2>Choose tile set:</h2>
        <div className="tiles">
          {tileSetsOptions.map(set => (
            <div
              key={set.id}
              onClick={() => setTileSet(set.id as ITileSet)}
              className={clsx('tile', tileSet === set.id ? 'selected' : 'inactive')}
            >
              {set.value}
            </div>
          ))}
        </div>
      </div>
      <div className="settings-section">
        <h2>Choose board size:</h2>
        <div className="tiles">
          {sizeOptions.map(set => (
            <div
              key={set.id}
              onClick={() => setBoardSize(set.id as IBoardSize)}
              className={clsx(
                'tile board-size',
                boardSize === set.id ? 'selected' : 'inactive'
              )}
            >
              {set.value}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
