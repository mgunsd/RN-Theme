import React from 'react';
import Navigator from './src/navigation/Navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as ThemeProvider } from './src/context/ThemeContext';

export default App = () => (
  <ThemeProvider>
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  </ThemeProvider>
);