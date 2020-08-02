import { StyleSheet } from 'react-native';

const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#181F3A'
  },

  title:{
    textAlign: 'center',
    color: '#d4d4d4',
    fontSize: 20,
    marginTop: 5,
    fontWeight: 'bold',
  },
  
  titleBox:{
    margin: 30,
    marginTop: 50,
    alignSelf: 'center',
    width: 280,
    height: 60,
    padding: 10,
    backgroundColor: '#000',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomEndRadius: 50,
  },

  input:{
    backgroundColor: '#fff',
    width: 170,
    borderRadius: 20,
    textAlign: 'right',
    paddingRight: 10,
    alignSelf: 'flex-end',
    top: -18
  },

  inputArea:{
    backgroundColor: '#fff',
    width: 100,
    borderRadius: 20,
    textAlign: 'right',
    paddingRight: 10,
    alignSelf: 'flex-end',
    top: -23
  },

  inputLabel:{
    backgroundColor: '#fff',
    width: 180,
    borderRadius: 20,
    textAlign: 'left',
    paddingLeft: 10,
    alignSelf: 'flex-start',
    top: 5
  },

  text:{
    color: '#fff'
  },

  textGreater:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  },

  view:{
    paddingLeft: 15,
    paddingRight: 15
  },

  viewColumn:{
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row'
  },

  viewRow:{
    marginRight: 10,
    width: 250,
    height: 65
  },


  bordered:{
    padding: 15,
    margin: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#fff'
  }

});

export default style;