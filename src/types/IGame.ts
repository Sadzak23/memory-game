export type IBoardSize = 's' | 'm' | 'l';
export type ITileSet = 'animals' | 'emoji' | 'food' | 'fruitAndVeggies';

export type ITile = {
  id: string;
  value: string;
  pair?: 'a' | 'b';
};
