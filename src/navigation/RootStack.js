import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerMenu from './DrawerMenu';
import IntroScreen from '../screens/IntroScreen';


const Stack = createStackNavigator();

export default RootStack = () => (
  <Stack.Navigator initialRouteName='Intro' headerMode='none'>
    <Stack.Screen name='Home' component={DrawerMenu} />
    <Stack.Screen name='Intro' component={IntroScreen} />
  </Stack.Navigator>
);

