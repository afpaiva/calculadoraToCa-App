import React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import style from './style';

import Floor from './components/floor';
import ShareButton from './components/shareButton';

// Array to receive new floor areas
export var building = [
  {
  label: 'Pavimento Térreo',
  area: ''
  }
];

export default function Index(){

  return (
    <View style = {style.container}>

      <ScrollView>

        <View style = {style.titleBox}>
          <Text style = {style.title}> CALCULADORA TO.CA. </Text>
        </View>

      
        <View style = {style.view}>
          <Text style = {style.text}>
            Área do terreno (m²):
          </Text>
          <TextInput style = {style.input} keyboardType = {"numeric"}/>
        </View>

        <Floor level="abaixo"/>

        <View style = {style.bordered}>
          {building.map(e =>
            <View key={e.label}>
              <TextInput
                style = {style.inputLabel}
                keyboardType = {"default"}
                defaultValue = {e.label}/>
              <TextInput
                style = {style.inputArea}
                keyboardType = {"numeric"}
                defaultValue={e.area}/>
            </View>
          )}
        </View>

        <Floor level="acima"/>

        <View style = {{height: 20}}/>

        <View style = {style.view}>
          <Text style = {style.text}>
            Área de projeção (m²):
          </Text>
          <TextInput style = {style.input} keyboardType = {"numeric"}/>
        </View>


        <View style = {style.view}>
          <Text style = {style.text}>
            Área permeável (m²):
          </Text>
          <TextInput style = {style.input} keyboardType = {"numeric"}/>
        </View>

        <View style = {style.bordered}>

          <View style={style.viewColumn}>
            <View style={style.viewRow}>
              <Text style = {style.textGreater}>Área total da construção:</Text>
            </View>
            <View>
              <Text style = {style.text}>250 m²</Text>
            </View>
          </View>
          
          <View style={style.viewColumn}>
            <View style={style.viewRow}>
              <Text style = {style.textGreater}>Taxa de Ocupação TO:</Text>
            </View>
            <View>
              <Text style = {style.text}>20 %</Text>
            </View>
          </View>

          <View style={style.viewColumn}>
            <View style={style.viewRow}>
              <Text style = {style.textGreater}>Coeficiente de Aproveitamento CA:</Text>
            </View>
            <View>
              <Text style = {style.text}>0.5</Text>
            </View>
          </View>

          <View style={style.viewColumn}>
            <View style={style.viewRow}>
              <Text style = {style.textGreater}>Taxa de Permeabilidade:</Text>
            </View>
            <View>
              <Text style = {style.text}>37 %</Text>
            </View>
          </View>

        </View>

        <ShareButton/>

      </ScrollView>

    </View>
  );

}