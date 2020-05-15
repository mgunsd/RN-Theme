import React, { useContext, useEffect } from "react";
import { StyleSheet, Text, View, Button, Switch, StatusBar } from 'react-native';
import { Context as ThemeContext } from '../context/ThemeContext';


const ThemeScreen = ({ navigation }) => {
  const { state, toggle } = useContext(ThemeContext);

  return (

    <View style={[styles.container, { backgroundColor: state.colors.primaryBackground }]}>
      <StatusBar
        barStyle={state.mode === 'dark' ? 'light-content' : 'dark-content'}
      />
      <Text style={{ color: state.colors.primaryText }}>
        Welcome... This is {state.mode} mode
      </Text>
      <Switch
        value={state.toggle}
        onValueChange={toggle}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
});

export default ThemeScreen;
