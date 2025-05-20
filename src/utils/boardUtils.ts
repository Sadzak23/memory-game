import type { IBoardSize } from '../types/IGame';

export const getBoard = (boardSize: IBoardSize) => {
  switch (boardSize) {
    case 's':
      return { grid: 4, tilesCount: 12 };
    case 'm':
      return { grid: 6, tilesCount: 30 };
    case 'l':
      return { grid: 8, tilesCount: 48 };
  }
};
