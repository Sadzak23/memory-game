import { createContext, useContext, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { IBoardSize, ITileSet } from '../types/IGame';

interface IMainContext {
  boardSize: IBoardSize;
  setBoardSize: Dispatch<SetStateAction<IBoardSize>>;
  tileSet: ITileSet;
  setTileSet: Dispatch<SetStateAction<ITileSet>>;
  gameStarted?: boolean;
  setGameStarted: Dispatch<SetStateAction<boolean>>;
}

const MainContext = createContext<IMainContext>({
  boardSize: 's',
  setBoardSize: () => {},
  tileSet: 'animals',
  setTileSet: () => {},
  gameStarted: false,
  setGameStarted: () => {},
});

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [boardSize, setBoardSize] = useState<IBoardSize>('s');
  const [tileSet, setTileSet] = useState<ITileSet>('animals');
  const [gameStarted, setGameStarted] = useState(false);

  return (
    <MainContext.Provider
      value={{
        boardSize,
        setBoardSize,
        tileSet,
        setTileSet,
        gameStarted,
        setGameStarted,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
