import { useState, type FC } from 'react';
import { Button } from 'src/elements/Button';
import { changeTheme, lsGetTheme } from 'src/theme/utils/themeUtils';
import type { Theme } from 'src/types/ITheme';

export const ChangeTheme: FC = () => {
  const [theme, setTheme] = useState<Theme>(lsGetTheme());

  return (
    <Button
      label={theme === 'light' ? '🌙' : '☀️'}
      onClick={() => changeTheme(theme, setTheme)}
    />
  );
};
