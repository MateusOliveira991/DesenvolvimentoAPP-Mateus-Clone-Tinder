import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import tinder from "../../assets/tinder.png";


export const Match = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={tinder} style={styles.image} />
        
        <View style={styles.overlay}>
          <Text style={styles.textomatch}>It's a Match</Text>
        </View>
      </View>
      
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.navigate('Mensagem')}
      >
        <Text style={styles.buttonText}>Envie um oi</Text>
      </TouchableOpacity>
      
    </View>
  );
};
