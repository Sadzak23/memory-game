import { createContext, useContext, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import type { IBoardSize, ITile, ITileSet } from 'src/types/IGame';
import { getTiles } from 'src/utils/gameUtils';

interface IMainContext {
  boardSize: IBoardSize;
  setBoardSize: Dispatch<SetStateAction<IBoardSize>>;
  tileSet: ITileSet;
  setTileSet: Dispatch<SetStateAction<ITileSet>>;
  gameTiles: ITile[];
  onStartGame: () => void;
  onEndGame: () => void;
}

const MainContext = createContext<IMainContext>({
  boardSize: 's',
  setBoardSize: () => {},
  tileSet: 'animals',
  setTileSet: () => {},
  gameTiles: [],
  onStartGame: () => {},
  onEndGame: () => {},
});

export const MainProvider = ({ children }: { children: ReactNode }) => {
  const [boardSize, setBoardSize] = useState<IBoardSize>('s');
  const [tileSet, setTileSet] = useState<ITileSet>('animals');
  const [gameTiles, setGameTiles] = useState<ITile[]>([]);

  return (
    <MainContext.Provider
      value={{
        boardSize,
        setBoardSize,
        tileSet,
        setTileSet,
        gameTiles,
        onStartGame: () => setGameTiles(getTiles(boardSize, tileSet)),
        onEndGame: () => setGameTiles([]),
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
