import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Principal } from "../Screens/Principal";
import { Match } from "../Screens/Match";
import { Mensagem } from "../Screens/Mensagem";


const Stack=createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Principal"
          component={Principal}
          options={{
            title: "Home",
          }}
        />

        <Stack.Screen name="Match" component={Match} />

        <Stack.Screen name="Mensagem" component={Mensagem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
