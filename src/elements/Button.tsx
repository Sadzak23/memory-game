import type { FC } from 'react';

interface Props {
  label: string;
  onClick: () => void;
}

export const Button: FC<Props> = ({ label, onClick }) => (
  <button className="button" onClick={onClick}>
    <span className="front">{label}</span>
  </button>
);
