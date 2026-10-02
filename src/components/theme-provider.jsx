import { createContext, useContext, useEffect, useState } from 'react';

const ThemeProviderContext = createContext({
  theme: 'light',
  setTheme: () => {},
});

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  storageKey = 'athar-theme',
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(storageKey) || defaultTheme,
  );

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const changeTheme = (theme) => {
    localStorage.setItem(storageKey, theme);
    setTheme(theme);
  };

  return (
    <ThemeProviderContext.Provider
      value={{
        theme,
        setTheme: changeTheme,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  return useContext(ThemeProviderContext);
}
