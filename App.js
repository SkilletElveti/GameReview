import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import Apploading from "expo-app-loading";
import Home from "./Screens/home";
import Navigator from './routes/drawer';
const getFonts = () =>
  Font.loadAsync({
    regular: require("./assets/fonts/Nunito-Regular.ttf"),
    bold: require("./assets/fonts/Nunito-Bold.ttf"),
  });

  export default function App() {
    const [fontsloaded, setFontsLoaded] = useState(false);
  
    if (fontsloaded) {
      return (
       //you can return any component of your choice here
        <Navigator/>
      );
    } else {
      return (
        <Apploading

          startAsync={getFonts}
          onFinish={() => {
            setFontsLoaded(true);
          }}
          onError={console.warn}
        />
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    Texts: {
      fontFamily: "bold",
    },
  });
  