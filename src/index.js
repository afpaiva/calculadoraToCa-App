import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

//var arrBuilding = [];
//for (let i = 0; i < 100; i++){
//    arrBuilding[i] = '';
//}
//

export default function Index(){

  return (
    <View style = {styles.container}>
      <View style = {styles.titleBox}>
        <Text style = {styles.title}> CALCULADORA TO.CA. </Text>
      </View>
    </View>
  );

}