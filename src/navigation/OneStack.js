import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OneScreen from '../screens/OneScreen';
import OneDetailScreen from '../screens/OneDetailScreen';

const Stack = createStackNavigator();

export default OneStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={OneScreen} />
    <Stack.Screen name='Detail' component={OneDetailScreen} />
  </Stack.Navigator>
);

