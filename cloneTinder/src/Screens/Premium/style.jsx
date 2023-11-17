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
      },
      optionsContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '100%', 
        marginBottom: 20,
      },
      subscriptionOption: {
        flex: 1, 
        height: 150,
        // backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5, 
        borderRadius: 10, 
      },
      subscriptionOptionText: {
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