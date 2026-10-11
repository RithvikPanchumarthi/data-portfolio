import { useEffect, useState } from 'react';

const readTheme = () =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light';

/**
 * Current theme ('light' | 'dark'), kept in sync with the `dark` class that
 * ThemeToggle sets on <html>.
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    const update = () => setTheme(readTheme());
    update();

    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return theme;
};
