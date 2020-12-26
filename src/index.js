import React, { useEffect, useState } from "react";
import { 
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import style from "./style";
import ShareButton from "./components/shareButton";

var up = 0;
var down = 0;

export default function Index() {
  
  const [building, setBuilding] = useState([{
    label: "Pavimento Térreo",
    area: 0
  }]);
  const [areaTerreno, setAreaTerreno] = useState();
  const [areaProjecao, setAreaProjecao] = useState();
  const [areaTotal, setAreaTotal] = useState(0);
  const forceUpdate = useForceUpdate();
  
  useEffect(()=>{
    console.log(building);
  });

  function setLevels(e){
    if (e == "acima"){
      up++;
      building.push({
        label: up + 'º Pavimento',
        area: 0
      });
    }
    else if (e == "abaixo"){
      down++;
      building.unshift({
        label: down + 'º Subsolo',
        area: 0
      });
    }
    else if (e == "removeAcima" && up > 0){
      up--;
      building.pop();
    }
    else if (e == "removeAbaixo" && down > 0){
      down--;
      building.shift();
    }
    forceUpdate();
    setAreaTotal(getAreaTotal);
    return building;
  }

  function getAreaTotal(){
    let area = 0;
    building.map((e)=>area+=e.area);
    return(area);
  }

  return(
  <View style={style.container}>
    <ScrollView>
      <View style={style.titleBox}>
        <Text style={style.title}> CALCULADORA TO.CA. </Text>
      </View>

      <View style={style.view}>
  <Text style={style.text}>Área do terreno (m²):</Text>
        <TextInput
          style={style.input}
          keyboardType={"numeric"}
          onChangeText={value => setAreaTerreno(value)}
        />
      </View>

      <View style = {style.viewBtn}>

        <TouchableOpacity
          style = {style.btn} 
          onPress = {() => setBuilding(setLevels("abaixo"))}>

          <Text style = {style.textBold}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style = {style.btn}
        onPress = {() => setBuilding(setLevels("removeAbaixo"))}>

          <Text style =  {style.textBold}>-</Text>
        </TouchableOpacity>
        <Text style = {style.textBtn}>pavimento abaixo</Text>

      </View>

      <View style={style.bordered}>
        {building.map((e) => 
          <View>
            <TextInput
              style={style.inputLabel}
              keyboardType={"default"}
              defaultValue={e.label}
              onChangeText={value => {
                e.label = value;
                setAreaTotal(getAreaTotal);
              }}
            />
            <TextInput
              style={style.inputArea}
              keyboardType={"numeric"}
              defaultValue={String(e.area)}
              onChangeText={value => {
                e.area = Number(value);
                setAreaTotal(getAreaTotal);
              }}
            />
          </View>
        )}
      </View>

      <View style = {style.viewBtn}>

        <TouchableOpacity
          style = {style.btn} 
          onPress = {() => setBuilding(setLevels("acima"))}>

          <Text style = {style.textBold}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style = {style.btn}
        onPress = {() => setBuilding(setLevels("removeAcima"))}>

          <Text style =  {style.textBold}>-</Text>
        </TouchableOpacity>
        <Text style = {style.textBtn}>pavimento acima</Text>

      </View>

      <View style={{ height: 20 }} />

      <View style={style.view}>
        <Text style={style.text}>Área de projeção (m²):</Text>
        <TextInput
          style={style.input}
          keyboardType={"numeric"}
          onChangeText={value => setAreaProjecao(value)}
          />
      </View>

      <View style={style.view}>
        <Text style={style.text}>Área permeável (m²):</Text>
        <TextInput style={style.input} keyboardType={"numeric"} />
      </View>

      <View style={style.bordered}>
        <View style={style.viewColumn}>
          <View style={style.viewRow}>
            <Text style={style.textGreater}>Área total da construção:</Text>
          </View>
          <View>
            <Text style={style.text}>{areaTotal}</Text>
          </View>
        </View>

        <View style={style.viewColumn}>
          <View style={style.viewRow}>
            <Text style={style.textGreater}>Taxa de Ocupação TO:</Text>
          </View>
          <View>
            <Text style={style.text}>20 %</Text>
          </View>
        </View>

        <View style={style.viewColumn}>
          <View style={style.viewRow}>
            <Text style={style.textGreater}>
              Coeficiente de Aproveitamento CA:
            </Text>
          </View>
          <View>
            <Text style={style.text}>0.5</Text>
          </View>
        </View>

        <View style={style.viewColumn}>
          <View style={style.viewRow}>
            <Text style={style.textGreater}>Taxa de Permeabilidade:</Text>
          </View>
          <View>
            <Text style={style.text}>37 %</Text>
          </View>
        </View>
      </View>

      <ShareButton />
    </ScrollView>
  </View>
  )
}

function useForceUpdate(){
  const [value, setValue] = useState(0);
  return () => setValue(value => ++value);
}