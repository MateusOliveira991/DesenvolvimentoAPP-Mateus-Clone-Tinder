import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from './style'

export const Principal = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Principal</Text>

      <TouchableOpacity onPress={()=>navigation.navigate('Match')} >
        coração
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Match')} >
        super like
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Mensagem')} >
        Voltar perfil
      </TouchableOpacity>

      

     
    </View>
  )
}

