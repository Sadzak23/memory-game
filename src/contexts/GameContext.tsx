import { createContext, useContext, useState, type ReactNode } from 'react';
import type { ITile } from '../types/IGame';

interface IGameContext {
  matchedTiles: string[];
  tile1: ITile | null;
  tile2: ITile | null;
  onTileClick: (tile: ITile) => void;
}

const GameContext = createContext<IGameContext>({
  matchedTiles: [],
  tile1: null,
  tile2: null,
  onTileClick: () => {},
});

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [matchedTiles, setMatchedTiles] = useState<string[]>([]);
  const [selectedTiles, setSelectedTiles] = useState<{
    tile1: ITile | null;
    tile2: ITile | null;
  }>({ tile1: null, tile2: null });
  const [timeOutId, setTimeOutId] = useState<number | null>(null);

  const onTileClick = (tile: ITile) => {
    if (!selectedTiles.tile1 || selectedTiles.tile2) {
      setSelectedTiles({ tile1: tile, tile2: null });
      if (timeOutId) {
        clearTimeout(timeOutId);
        setTimeOutId(null);
      }
    } else {
      setSelectedTiles({ ...selectedTiles, tile2: tile });
      if (selectedTiles.tile1.id === tile.id) {
        setTimeout(() => {
          setMatchedTiles(prev => [...prev, tile.id]);
          setSelectedTiles({ tile1: null, tile2: null });
        }, 450);
      } else {
        const id = setTimeout(() => {
          setSelectedTiles({ tile1: null, tile2: null });
          setTimeOutId(null);
        }, 1000);
        setTimeOutId(id);
      }
    }
  };

  return (
    <GameContext.Provider
      value={{
        matchedTiles,
        tile1: selectedTiles.tile1,
        tile2: selectedTiles.tile2,
        onTileClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
