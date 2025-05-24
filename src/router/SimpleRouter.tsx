import type { FC } from 'react';
import { useMainContext } from 'src/contexts/MainContext';
import { GamePage } from 'src/pages/GamePage';
import { HomePage } from 'src/pages/HomePage';

export const SimpleRouter: FC = () => {
  const { gameTiles } = useMainContext();

  return gameTiles.length === 0 ? <HomePage /> : <GamePage />;
};
