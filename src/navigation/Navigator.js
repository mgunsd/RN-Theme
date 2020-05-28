import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import RootStack from './RootStack'

const Navigator = () => {
  const { dark } = useTheme();
  return (
    <NavigationContainer theme={dark ? DarkTheme : DefaultTheme}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigator;