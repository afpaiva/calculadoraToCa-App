import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as build from '../../index';

var up = 0;
var down = 0;

const Floor = (props) => {
  return (
    <View style = {style.view}>

      <TouchableOpacity
        style = {style.btn} 
        onPress = {() => {
          if (props.level === "acima"){
            up++;
            build.building.push({
              label: up + 'º Pavimento',
              area: ''
            });
          }
          else if (props.level === "abaixo"){
            down++;
            build.building.unshift({
              label: down + 'º Subsolo',
              area: ''
            });
          }
          console.log(build.building);
        }}>

        <Text style = {style.textBold}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style = {style.btn}
      onPress = {() => {
        if (props.level === "acima" && up > 0){
          up--;
          build.building.pop();
        }
        else if (props.level === "abaixo" && down > 0){
          down--;
          build.building.shift();
        }
        console.log(build.building);
      }}>

        <Text style =  {style.textBold}>-</Text>
      </TouchableOpacity>
  <Text style = {style.text}>pavimento {props.level}</Text>

    </View>
  );
}


export default Floor;

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