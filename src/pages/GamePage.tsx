import { type FC } from 'react';
import { Tile } from 'src/components/Tile';
import { GameProvider } from 'src/contexts/GameContext';
import { useMainContext } from 'src/contexts/MainContext';
import { Button } from 'src/elements/Button';
import { getTilePairId } from 'src/utils/gameUtils';

export const GamePage: FC = () => {
  const { boardSize, gameTiles, onEndGame } = useMainContext();

  return (
    <>
      <GameProvider>
        <div className={`board ${boardSize}`}>
          {gameTiles.map(tile => (
            <Tile key={getTilePairId(tile)} tile={tile} />
          ))}
        </div>
      </GameProvider>
      <div className="actions">
        <Button label="End Game" onClick={onEndGame} />
      </div>
    </>
  );
};
