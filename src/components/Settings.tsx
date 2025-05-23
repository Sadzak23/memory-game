import type { FC } from 'react';
import { useMainContext } from '../contexts/MainContext';
import { tileSets } from '../utils/tileData';
import clsx from 'clsx';
import type { IBoardSize, ITileSet } from '../types/IGame';
import { Button } from '../elements/Button';

export const Settings: FC = () => {
  const { boardSize, setBoardSize, tileSet, setTileSet, setGameStarted } =
    useMainContext();

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
    <div>
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
              // className={clsx('tile', { inactive: tileSet !== set.id })}
            >
              {set.value}
            </div>
          ))}
        </div>
      </div>
      <div className="actions">
        <Button label="Start Game" onClick={() => setGameStarted(true)} />
      </div>
    </div>
  );
};
