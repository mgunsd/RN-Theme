import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const FourScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FourScreen </Text>
    </View>
  )
}

export default FourScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
})