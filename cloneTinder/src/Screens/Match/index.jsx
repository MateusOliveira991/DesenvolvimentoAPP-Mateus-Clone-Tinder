import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from './style'

export const Match = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Match</Text>

      

      <TouchableOpacity onPress={()=>navigation.navigate('Mensagem')} >
        envie um oi
      </TouchableOpacity>

    </View>
  )
}

