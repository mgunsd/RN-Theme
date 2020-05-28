import React, { useContext } from "react";
import { StyleSheet, Text, View, Switch, StatusBar } from 'react-native';
import { useTheme } from '../context/ThemeContext';


const ThemeScreen = ({ navigation }) => {
  const { colors, dark } = useTheme();

  return (

    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <Text style={{ color: colors.text }}>
        Welcome... This is  theme
      </Text>

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
