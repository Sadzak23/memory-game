import './styles/App.scss';

import type { FC } from 'react';
import { MainProvider } from './contexts/MainContext';
import { Footer } from './components/Footer';
import { SimpleRouter } from 'src/router/SimpleRouter';

const App: FC = () => (
  <>
    <main>
      <MainProvider>
        <SimpleRouter />
      </MainProvider>
    </main>
    <Footer />
  </>
);

export default App;
