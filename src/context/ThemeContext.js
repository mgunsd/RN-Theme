import React, { useState } from 'react'
import { Appearance } from 'react-native-appearance'
import { themes } from '../constants/Themes';

const deviceMode = Appearance.getColorScheme();
export const ThemeContext = React.createContext({ colors: (themes[deviceMode]).colors });
export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(deviceMode)
  return (
    <ThemeContext.Provider value={{ colors: (themes[theme]).colors, setTheme, mode: theme.dark, theme: theme }}>
      {children}
    </ThemeContext.Provider>
  );
};