import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabs from './BottomTabs';
import TopTabs from './TopTabs';
import FourScreen from '../screens/FourScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ThemesScreen from '../screens/ThemesScreen';

const Drawer = createDrawerNavigator();
export default DrawerMenu = () => (
  <Drawer.Navigator
    drawerType='back'
    drawerContentOptions={{
      activeTintColor: '#252a34',
      itemStyle: { marginVertical: 10, width: '90%' },
    }}

  >
    <Drawer.Screen name='Tabs' component={BottomTabs} />
    <Drawer.Screen name='Settings' component={TopTabs} />
    <Drawer.Screen name='Profile' component={ProfileScreen} />
    <Drawer.Screen name='Themes' component={ThemesScreen} />
    <Drawer.Screen name='Four' component={FourScreen} />
  </Drawer.Navigator >
);

