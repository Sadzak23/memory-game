import './styles/App.scss';

import type { FC } from 'react';
import { MainProvider } from './contexts/MainContext';
import { Game } from './pages/Game';
import { Footer } from './components/Footer';

const App: FC = () => {
  return (
    <div className="app">
      <main>
        <MainProvider>
          <Game />
        </MainProvider>
      </main>
      <Footer />
    </div>
  );
};

export default App;
