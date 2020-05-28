import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavLink from '../navigation/NavLink';

const SettingsScreen = () => {
  return (

    <View style={styles.container}>
      <Text> SettingsScreen </Text>
      <NavLink text='Logout / Go to Intro' routeName='Intro' />
    </View>
  )
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
})