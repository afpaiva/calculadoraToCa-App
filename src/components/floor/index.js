import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Floor(){
  return (
    <View style = {style.view}>

      <TouchableOpacity style = {style.btn}>
        <Text style = {style.textBold}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {style.btn}>
        <Text style =  {style.textBold}>-</Text>
      </TouchableOpacity>

      <Text style = {style.text}>inserir pavimento abaixo</Text>

    </View>
  );
}

const style = StyleSheet.create({ 
  view:{
    margin: 10,
    flexDirection: 'row'
  },

  text:{
    marginTop: 5,
    marginLeft: 5,
    textAlign: 'center',
    color:"#fff",
  },

  textBold:{
    textAlign: 'center',
    color:"#fff",
    fontWeight: 'bold'
  },

  btn:{
    margin: 5,
    marginTop: 0,
    width: 30,
    height: 30,
    color: '#fff',
    backgroundColor: '#000',
    borderRadius: 20,
    justifyContent: 'center',
    borderLeftWidth: 2,
    borderTopWidth: 1,
    borderColor: '#757575'
  }
});