import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import bg from "../img/bg.jpg";

function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>
            Bienvenidos
        </Text>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: '#ffffff4a',
        borderRadius: 20,
        margin: 10,
        padding: 15
      }
  });

  module.exports = Home;