import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import ActivityAddtion from "./AcitvityAddtion";
import ActivitiesList from "./ActivitiesList";

export default function Home(){
    const img = require('../Images/black_Background.png');
    return(
        <View>
           <ImageBackground source={img} resizeMode="cover" style={styles.container}>
             <ActivityAddtion/>
             <View style ={styles.list}>
                <ActivitiesList/>
            </View>
           </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
  
    container:{
         borderRadius:2,
         borderWidth:1,
         height: 763,
         width:500,
    },
  
    inputStyle:{
        borderColor: "white",
        backgroundColor:"white",
        borderRadius:2,
        borderWidth:1,
        height: 50,
        width:400,
    },
    
    list:{
        marginLeft: 75,
        borderColor:"#661825",
        height: 550,
        width: 350,
        borderRadius:8,
        borderWidth:2,
    }

});