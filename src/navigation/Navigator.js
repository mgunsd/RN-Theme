import React, { useContext } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { Context as ThemeContext } from '../context/ThemeContext';
import RootStack from './RootStack'

const Navigator = () => {
  const { state, toggle } = useContext(ThemeContext);
  return (
    <NavigationContainer theme={state.mode === 'dark' ? DarkTheme : DefaultTheme}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigator;