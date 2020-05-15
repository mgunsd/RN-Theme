import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
//import { useColorScheme } from 'react-native';
import RootStack from './RootStack'

const Navigator = () => {
  //const scheme = useColorScheme('');
  return (
    <NavigationContainer >
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigator;