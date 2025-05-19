export const getBoard = (boardSize: 's' | 'm' | 'l') => {
  switch (boardSize) {
    case 's':
      return { grid: 4, tilesCount: 12 };
    case 'm':
      return { grid: 6, tilesCount: 30 };
    case 'l':
      return { grid: 8, tilesCount: 48 };
  }
};
