import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fotoa from "../../assets/fotoa.png";

export const Principal = ({ navigation }) => {
  return (

    
    <View style={styles.container}>
      <Image source={fotoa} style={{ width: '100%', height: '100%' }} />

      
      <View style={styles.opcao}>
        <TouchableOpacity onPress={() => navigation.navigate("Mensagem")}>
          {" "}
          {/*tinder gold */}
          <Ionicons name="refresh-circle-outline" size={40} color="#f8c43e" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Principal")}>
          {" "}
          {/*Dar não */}
          <Ionicons name="close-circle-outline" size={54} color="#f45266" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Match")}>
          {" "}
          {/*super Like */}
          <MaterialCommunityIcons
            name="star-circle-outline"
            size={40}
            color="#04e8fc"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Match")}>
          {" "}
          {/*Dar like*/}
          <Ionicons name="heart-circle-outline" size={54} color="#37cdc2" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Mensagem")}>
          {" "}
          {/*tinder gold */}
          <MaterialCommunityIcons name="lightning-bolt-circle" size={40} color="purple" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
