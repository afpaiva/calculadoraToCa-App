import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#181F3A'
  },

  title:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20
  },
  
  titleBox:{
    marginTop: 35,
    alignSelf: 'center',
    width: 280,
    padding: 10,
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20
  }
});

export default styles;