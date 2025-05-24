import type { FC } from 'react';
import { Settings } from 'src/components/Settings';
import { useMainContext } from 'src/contexts/MainContext';
import { Button } from 'src/elements/Button';

export const HomePage: FC = () => {
  const { onStartGame } = useMainContext();

  return (
    <>
      <h1>Memory game</h1>
      <Settings />
      <div className="actions">
        <Button label="Start Game" onClick={onStartGame} />
      </div>
    </>
  );
};
