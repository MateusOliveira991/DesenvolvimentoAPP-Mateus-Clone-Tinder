import { View, Text } from 'react-native'
import React from 'react'
import {styles} from './style'
import { TextInput } from 'react-native'


export const Mensagem = () => {
  return (
    <View style={styles.container}>
      <Text>Mensagem</Text>
      <TextInput placeholder='escreva aqui' />
    </View>
  )
}

