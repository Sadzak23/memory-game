import type { FC } from 'react';
import { useMainContext } from 'src/contexts/MainContext';

export const WinAlert: FC = () => {
  const { onEndGame } = useMainContext();

  return (
    <div className="win-animation" onClick={onEndGame}>
      <div className="win-text">You Win!</div>
      <div className="trophy">🏆</div>
    </div>
  );
};
