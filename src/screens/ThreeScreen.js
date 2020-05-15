import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ThreeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ThreeScreen </Text>
    </View>
  )
}

export default ThreeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
})