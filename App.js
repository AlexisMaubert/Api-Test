import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Frase from './components/Frase';
import bg from './img/bg.jpg';

export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground
        source= {bg}
        resizeMode='cover'
        style={styles.image}>
        <Frase />
      </ImageBackground>
      
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
