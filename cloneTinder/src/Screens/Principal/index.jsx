import { View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {styles} from './style';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import fotoa from '../../../assets/fotoa.png';








export const Principal = ({navigation}) => {
  return (

    
    <View style={styles.container}>

      
          <Image
          source={fotoa}  />
        

          <View style={styles.opcao} > 
      
          


      <TouchableOpacity onPress={()=>navigation.navigate('Mensagem')} >  {/*Retorna perfil anterior */}
       <Ionicons name="refresh-circle-outline" size={34} color="#f8c43e" /> 
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Principal')} >  {/*Dar não */}
      <Ionicons name="close-circle-outline" size={54} color="#f45266" />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Match')} >  {/*super Like */}
      <MaterialCommunityIcons name="star-circle-outline" size={34} color="#04e8fc" />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate('Match')} >  {/*Dar like*/}
      <Ionicons name="heart-circle-outline" size={54} color="#37cdc2" />
      
      </TouchableOpacity>

      </View>


           </View>
           
  )
}

