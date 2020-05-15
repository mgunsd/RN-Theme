import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const OneDetailScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text> OneDetailScreen </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-start', padding: 15, }}>
        <Button title='Go back' onPress={() => navigation.goBack()} />
      </View>
    </>
  )
}

export default OneDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    fontSize: 40,
    fontWeight: 'bold',
  },
})
