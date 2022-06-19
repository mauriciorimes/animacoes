import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from "react-native-vector-icons";
import LottieView from "lottie-react-native";

export default function App() {

  let animation = React.createRef();

  function startAnimation() {
    animation.current.play();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startAnimation}>
        <Feather name="play" size={80} color="green"/>
      </TouchableOpacity>
      <LottieView 
        source={require("./assets/check.json")}
        style={styles.icone}        
        loop={false}
        ref={animation}/> 

      <Text style={styles.texto}>Enjoy and click anytime!</Text> 
         
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icone: {
    width: 200,
    height: 400
  },
  texto: {
    fontSize: 20,
    color: "green"
  }
});
