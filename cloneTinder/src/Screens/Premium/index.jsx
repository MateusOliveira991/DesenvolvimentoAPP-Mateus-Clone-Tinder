import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { Fontisto } from "@expo/vector-icons";

export const Premium = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Fontisto name="tinder" size={30} color="#eeb600" />
      <Text style={styles.title}>Tinder Gold</Text>

      <Text style={styles.description}>
        Desbloqueie recursos premium para melhorar sua experiência no Tinder.
      </Text>

      <Text style={styles.description}>
        Conheça nossos Planos:
      
      </Text>
      
     
      {/* Opções de assinatura */}
      <TouchableOpacity style={styles.planos}>
        <Text style={styles.valor}>1 mês - R$29.99</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.planos}>
        <Text style={styles.valor}>6 meses - 6 x R$19.99</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.planos}>
        <Text style={styles.valor}> 1 ano - 12 x R$9.99</Text>
      </TouchableOpacity>

      

     
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};
