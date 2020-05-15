import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import NavLink from '../navigation/NavLink';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={styles.container}>
        <Text> SettingsScreen </Text>
        <NavLink text='Logout / Go to Intro' routeName='Intro' />
      </View>
    </SafeAreaView>
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