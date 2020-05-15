import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import NavLink from '../navigation/NavLink';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Text> This is IntroScreen </Text>
      <NavLink text='Go to Main Route'
        routeName='Home' />
    </View>
  )
}

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
})