import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
   
  },
  msgContainerEnvio: {
    marginLeft: 'auto', 
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  msgInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
    
  },
  msgInput: {
    backgroundColor: '#DCDCDC',
    padding: 10,
    width: '80%',
    borderRadius: 10,
    opacity: 0.4,
    marginBottom: 3,
    
  },
  msgTextEnvio: {
    textAlign: 'right',
    color: 'white',
  },
  

});
