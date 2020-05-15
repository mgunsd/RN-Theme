import React from 'react'
import { Appearance, StyleSheet, Text, View, useColorScheme } from 'react-native'
import NavLink from '../navigation/NavLink';

const OneScreen = () => {
  return (
    <View style={styles.container}>
      <Text> OneScreen </Text>
      <NavLink text='this link utilize "useNavigation" hook to navigate to Detail'
        routeName='Detail' />


    </View>
  )
}

export default OneScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    fontSize: 40,
    fontWeight: 'bold',
  },
})
