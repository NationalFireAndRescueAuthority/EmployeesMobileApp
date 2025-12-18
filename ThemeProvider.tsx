
import React, { createContext, useContext } from 'react';
import { I18nManager } from 'react-native';

const ThemeContext = createContext({
  isRTL: I18nManager.isRTL,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const isRTL = I18nManager.isRTL;

  // You can extend this to a full-fledged theme with colors, fonts, etc.
  const theme = {
    isRTL,
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
