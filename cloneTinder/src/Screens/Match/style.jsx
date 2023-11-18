import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textomatch: {
    fontSize: 94,
    fontWeight: 'bolder',
    color: '#37cdc2',
    textAlign: 'center',
  },

  touchableOpacity: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'white',
    padding: 10,
    width: '80%',
    borderRadius: 10, 
    opacity: 0.7,
  },
  buttonText: {
    color: 'black',
    opacity: 0.8,
    fontSize: 16,
    textAlign: 'center',
  },
});