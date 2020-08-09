import React from 'react';
import { Button, View } from 'react-native';

export default function ShareButton (){
  return (
    <View>

      <View style = {{height: 20}}/>

        <Button
        title = "Enviar Resultados via Whatsapp"
        color = "#2c9433"
        />

      <View style = {{height: 20}}/>

        <Button
        title = "Compartilhar"
        color = "#2e4063"
        />

      <View style = {{height: 20}}/>

        <Button
        title = "Versão Sem Anúncios"
        color = "#636363"
        />

      <View style = {{height: 20}}/>

    </View>
  );
};