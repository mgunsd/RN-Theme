import React from 'react';
import Navigator from './src/navigation/Navigator';
import { ThemeProvider } from './src/context/ThemeContext';

export default App = () => (
  <ThemeProvider>
    <Navigator />
  </ThemeProvider>
);