import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Principal } from "../Screens/Principal";
import { Match } from "../Screens/Match";
import { Mensagem } from "../Screens/Mensagem";
import { Fontisto } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';


const Stack=createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      
        <Stack.Screen

          name="Principal"
          component={Principal}
          
          options={{

            headerLeft: () => (
              <Fontisto name="tinder" size={20} color="#fc5267" style={{ marginLeft: 15, }} />
            ),
            
            title: "tinder", 
            headerTintColor: '#fc5267',
            headerTitleStyle: {fontSize: 20, fontWeight: 'bold', fontFamily: 'arial'} ,
           
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 15 }}>
                <Octicons name="bell-fill" size={17} color="gray" style={{ marginRight: 50 }} />
                <FontAwesome name="sliders" size={18} color="gray" />
              </View>
            ),


           
            // headerRight: () => (
            // <Octicons name="bell-fill" size={18} color="gray" style={{marginRight: 60}} />

           
            // ),
            // headerRight: () => (
            // <FontAwesome name="sliders" size={24} color="gray" />
            // )

          }}

      
        />

        

        <Stack.Screen name="Match" component={Match} />

        <Stack.Screen name="Mensagem" component={Mensagem} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
};


// headerTintColor: 'blue',
//         headerTitleAlign: 'center',
//         headerStyle: { backgroundColor: 'lightblue' },
//         headerTitleStyle: { fontSize: 20, fontWeight: 'bold' },
//         headerBackTitleVisible: false,
//         headerShown: true,
//         /* headerShown: false p tirar a barra */