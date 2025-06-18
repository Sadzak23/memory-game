import type { FC } from 'react';
import { ChangeTheme } from 'src/theme/components/ChangeTheme';
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
        <ChangeTheme />
        <Button label="Start Game" onClick={() => setTimeout(onStartGame, 300)} />
      </div>
    </>
  );
};
