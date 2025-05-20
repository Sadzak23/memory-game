import type { FC } from 'react';
import { GameProvider } from '../contexts/GameContext';
import { Board } from '../components/Board';
import { useMainContext } from '../contexts/MainContext';
import { Settings } from '../components/Settings';
import { Button } from '../elements/Button';

export const Game: FC = () => {
  const { gameStarted, setGameStarted } = useMainContext();

  return !gameStarted ? (
    <>
      <h1>Memory game</h1>
      <Settings />
    </>
  ) : (
    <GameProvider>
      <Board />
      <div className="actions">
        <Button label="End Game" onClick={() => setGameStarted(false)} />
      </div>
    </GameProvider>
  );
};
