import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

export const Premium = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tinder Gold</Text>
      <Text style={styles.description}>
        Desbloqueie recursos premium para melhorar sua experiência no Tinder.
      </Text>

      <Text style={styles.description}>
        Conheça nossos Planos:
      
      </Text>
      
      {/* Opções de assinatura */}
      <TouchableOpacity style={styles.subscriptionOption}>
        <Text style={styles.subscriptionOptionText}>1 mês - R$29.99</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subscriptionOption}>
        <Text style={styles.subscriptionOptionText}>6 meses - 6 x R$19.99</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.subscriptionOption}>
        <Text style={styles.subscriptionOptionText}> 1 ano - 12 x R$9.99</Text>
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
