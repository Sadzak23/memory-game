import { type FC } from 'react';
import { Tile } from 'src/components/Tile';
import { WinAlert } from 'src/components/WinAlert';
import { GameProvider, useGameContext } from 'src/contexts/GameContext';
import { useMainContext } from 'src/contexts/MainContext';
import { Button } from 'src/elements/Button';
import { getTilePairId, tilesCount } from 'src/utils/gameUtils';

const Game: FC = () => {
  const { boardSize, gameTiles, onEndGame } = useMainContext();
  const { matchedTiles } = useGameContext();

  const win = matchedTiles.length === tilesCount[boardSize] / 2;

  return (
    <>
      <div className={`board ${boardSize}`}>
        {gameTiles.map(tile => (
          <Tile key={getTilePairId(tile)} tile={tile} />
        ))}
      </div>
      {win && <WinAlert />}
      <div className="actions">
        <Button label="End Game" onClick={onEndGame} />
      </div>
    </>
  );
};

export const GamePage: FC = () => (
  <GameProvider>
    <Game />
  </GameProvider>
);
