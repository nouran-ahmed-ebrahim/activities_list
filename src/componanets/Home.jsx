import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import ActivityAddtion from "./AcitvityAddtion";
import ActivitiesList from "./ActivitiesList";

export default function Home(){
    const img = require('../Images/black_Background.png');
    const [state, setState] = React.useState({
        activites: [
        {key:1, name :"Play Chess", date: "9/29/2022, 9:42:36 PM"},
        {key:2, name :"Read Novel", date: "9/29/2022, 10:42:36 PM"},
        {key:3, name :"Solve the Task", date: "9/29/2022, 7:42:36 PM"},
        {key:4, name :"Study", date: "9/29/2022, 5:42:36 PM"},  
        {key:5, name :"Play Chess", date: "9/29/2022, 9:42:36 PM"},
        {key:6, name :"Read Novel", date: "9/29/2022, 10:42:36 PM"},
        {key:7, name :"Solve the Task", date: "9/29/2022, 7:42:36 PM"},
        {key:8, name :"Study", date: "9/29/2022, 5:42:36 PM"},
]});

    return(
        <View>
           <ImageBackground source={img} resizeMode="cover" style={styles.container}>
             <ActivityAddtion/>
             <View style ={styles.list}>
                <ActivitiesList Activites= {state.activites}/>
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