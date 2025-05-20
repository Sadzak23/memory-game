export type IBoardSize = 's' | 'm' | 'l';
export type ITileSet = 'animals' | 'emoji';

export type ITile = {
  id: string;
  value: string;
  pair?: 'a' | 'b';
};
