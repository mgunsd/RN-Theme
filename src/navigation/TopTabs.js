import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ThemesScreen from '../screens/ThemesScreen';

const Tab = createMaterialTopTabNavigator();

export default TopTabs = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Top Tabs Menu</Text>
    <Tab.Navigator
      initialRouteName="Settings"
      // initialLayout={{ width: Dimensions.get('window').width }}
      tabBarOptions={{
        activeTintColor: '#252a34',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: '#eaeaea' },
      }}
    >
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: 'Settings' }}
      />
      <Tab.Screen
        name="Themes"
        component={ThemesScreen}
        options={{ tabBarLabel: 'themes' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: '10%',
    width: '100%',
  },
  text: {
    fontSize: 20,
    color: '#252a34',
    fontWeight: 'bold',
    width: '100%',
    marginVertical: 20,
    textAlign: 'center',
  },
});