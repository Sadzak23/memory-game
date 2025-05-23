import './styles/App.scss';

import type { FC } from 'react';
import { MainProvider } from './contexts/MainContext';
import { Game } from './pages/Game';

const App: FC = () => {
  return (
    <div className="app">
      <main>
        <MainProvider>
          <Game />
        </MainProvider>
      </main>
      <footer>
        <p>This game was designed & made by Sadzak © 2025</p>
      </footer>
    </div>
  );
};

export default App;
