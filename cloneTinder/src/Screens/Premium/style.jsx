import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#eeb600',
      },

      descricao: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',

      },
     
      planos: {
        flex: 1, 
        backgroundColor: 'lightblue',
        alignItems: 'center',
        marginHorizontal: 100, 
        borderRadius: 10, 
        width: '100%',
        justifyContent: 'center',
        margin: 14,
             
       
      },
      valor: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
      },
      backButton: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
      },
      backButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },

      
    });