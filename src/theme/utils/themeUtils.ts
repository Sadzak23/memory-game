import type { Theme } from 'src/types/ITheme';

export const lsGetTheme = () => (localStorage.getItem('theme') as Theme) || 'dark';
const lsSetTheme = (value: Theme) => localStorage.setItem('theme', value);

export const setInitialTheme = () => {
  const theme = lsGetTheme();
  document.body.setAttribute('data-theme', theme);
  setTimeout(() => {
    document.body.classList.add('theme-transition');
  });
};

export const changeTheme = (theme: Theme, callback?: (theme: Theme) => void) => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-theme', newTheme);
  lsSetTheme(newTheme);
  callback?.(newTheme);
};
