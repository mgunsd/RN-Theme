import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaskedView from '@react-native-community/masked-view';

const TwoScreen = () => {
  return (
    <View style={styles.container}>

      <MaskedView
        style={{ flex: 1, flexDirection: 'row', height: '100%' }}
        maskElement={
          <View
            style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: 'transparent',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >

            <Text
              style={{
                fontSize: 80,
                color: 'black',
                fontWeight: 'bold',
                width: '100%',
                textAlign: 'center',
              }}
            >
              Two
            </Text>
          </View>
        }
      >
        {/* Shows behind the mask, you can put anything here, such as an image */}
        <View style={{
          flex: 1, alignItems: "center",
          justifyContent: "center", height: '100%', width: '100%', backgroundColor: '#252a34',
        }}>
          <Text style={{ color: 'white' }}> 2222222222222222222222222222</Text>
          <Text style={{ color: 'white' }}> 2222222222222222222222222222</Text>
          <Text style={{ color: 'white' }}> 2222222222222222222222222222</Text>
          <Text style={{ color: 'white' }}> 2222222222222222222222222222</Text>
          <Text style={{ color: 'white' }}> 2222222222222222222222222222</Text>
        </View>

      </MaskedView>

      <Text> TwoScreen </Text>
    </View>
  )
}

export default TwoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
})