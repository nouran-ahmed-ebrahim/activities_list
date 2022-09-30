import React  from "react";
import {Text, TouchableOpacity } from "react-native";

export default function Appbutton({btnName, width, hight, color, backgroundColor,margin, onPressFun}){

 return (
      <TouchableOpacity 
      style = {{ width, 
        hight,
        backgroundColor,
        borderRadius: 7,
        borderWidth:1,
        borderColor: "#661825",//"#8900ae",
        margin,
     }}
     onPress= {onPressFun}
     >
        <Text 
         style={{
            color,
            textAlign:"center",
            fontFamily: "timesNewRoman",
            fontStyle: "italic",
            fontSize: 14,
        }}>

          {btnName}
        </Text>
      </TouchableOpacity>
    );
}

