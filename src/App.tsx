import type { FC } from 'react';
import './styles/App.scss';
import { Board } from './components/Board';
import { GameProvider } from './contexts/GameContext';

const App: FC = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>Memory game</h1>
        <p>By Sadzak</p>
      </div>
      <GameProvider>
        <Board size="s" />
      </GameProvider>

      <GameProvider>
        <Board size="m" />
      </GameProvider>

      <GameProvider>
        <Board size="l" />
      </GameProvider>
    </div>
  );
};

export default App;
