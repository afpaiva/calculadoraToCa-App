import React from 'react';
import { View, Text, TextInput } from 'react-native';
import style from './style';

//var arrBuilding = [];
//for (let i = 0; i < 100; i++){
//    arrBuilding[i] = '';
//}
//

export default function Index(){

  return (
    <View style = {style.container}>
      
      <View style = {style.titleBox}>
        <Text style = {style.title}> CALCULADORA TO.CA. </Text>
      </View>

      <Text style = {style.text}>
        Área do terreno (m²):
      </Text>
      <TextInput style = {style.input} keyboardType = {"numeric"}>
        
      </TextInput>

    </View>
  );

}