import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

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
    margin: 30,
    marginTop: 50,
    alignSelf: 'center',
    width: 280,
    padding: 10,
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20
  },

  input:{
    backgroundColor: '#fff',
    width: 170,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'flex-end'
  },

  text:{
    color: '#fff'
  }

});

export default style;