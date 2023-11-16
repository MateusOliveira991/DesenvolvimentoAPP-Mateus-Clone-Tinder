import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { styles } from './style';

export const Mensagem = () => {
  const [mensagem, setMensagem] = useState('');
  const [mensagensList, setMensagensList] = useState([]);

  const handleEnviarMensagem = () => {
    if (mensagem.trim() !== '') {
      setMensagensList([...mensagensList, mensagem]);
      setMensagem('');
    }
  };

  return (
    <View style={styles.container}>
       <FlatList
  data={mensagensList}
  renderItem={({ item }) => (
    <View style={styles.msgContainerEnvio}>
      <Text style={styles.msgTextEnvio}>{item}</Text>
    </View>
  )}
  keyExtractor={(item, index) => index.toString()}
  contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
/>
      <View style={styles.msgInputContainer}>
        <TextInput
          placeholder='Digite uma mensagem'
          style={styles.msgInput}
          value={mensagem}
          onChangeText={(text) => setMensagem(text)}
          
        />
        <Button title='Enviar' onPress={handleEnviarMensagem} />
      </View>
    </View>
  );
};
