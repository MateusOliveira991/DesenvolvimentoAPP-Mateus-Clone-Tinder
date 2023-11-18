import { View, Image, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react"; 
import { styles } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fotoa from "../../assets/fotoa.png";
import rodrigo from "../../assets/rodrigo.jpg";
import { LinearGradient } from 'expo-linear-gradient';

export const Principal = ({ navigation }) => {
  const [imagem, setImagem] = useState(fotoa); 
  const [texto, setTexto] = useState("Mateus 32");

  const handleFechar = () => {
    if (imagem === fotoa) {
      setImagem(rodrigo);
      setTexto("Rodrigo 45");
    } else {
      setImagem(fotoa);
      setTexto("Mateus 32");
    }
  };

  return (
    <LinearGradient
      colors={['black','black', '#15400e', 'black']}
      style={styles.container}
    >
      <Image source={imagem} style={{ width: '100%', height: '55%', marginTop: 90 }} />
      
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          fontFamily: "arial",
          marginLeft: 2,
          color: "white",
        }}
      >
        {texto}
      </Text>

      <View style={styles.opcao}>
        <TouchableOpacity onPress={() => navigation.navigate("Premium")}>
          <Ionicons name="refresh-circle-outline" size={40} color="#f8c43e" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Principal")}>
          <Ionicons name="close-circle-outline" size={54} color="#f45266" onPress={handleFechar} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Match")}>
          <MaterialCommunityIcons
            name="star-circle-outline"
            size={40}
            color="#04e8fc"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Match")}>
          <Ionicons name="heart-circle-outline" size={54} color="#37cdc2" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Premium")}>
          <MaterialCommunityIcons name="lightning-bolt-circle" size={40} color="purple" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};
