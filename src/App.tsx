import type { FC } from 'react';
import './styles/App.scss';
import { Board } from './components/Board';

const App: FC = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>Memory game</h1>
        <p>By Sadzak</p>
      </div>
      <Board size="s" />
      <Board size="m" />
      <Board size="l" />
    </div>
  );
};

export default App;
