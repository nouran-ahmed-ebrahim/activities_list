import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import ActivityAddtion from "./AcitvityAddtion";
import ActivitiesList from "./ActivitiesList";

export default function Home(){
    const img = require('../Images/background2.png');
    const [state, setState] = React.useState({
       activityKey: -1, 
       activityName: '',
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
  

    const newActivity =  function(newActivityName) {
        if(state.activityKey === -1){
            addActivity(newActivityName);
        }
        else{
            editeActivity(state.activityKey, newActivityName);
        }
    }

    const addActivity = function(activityName){
        const newActivities =state.activites;
        if(newActivities.length === 0){
            newActivities.push({key:1, name: activityName, date: new Date().toLocaleString()})
          }
          else{
             const lastKey = newActivities[newActivities.length - 1].key
             newActivities.push({key: lastKey + 1, name: activityName, date: new Date().toLocaleString()});
          }
          setState((prevState) =>{
            return {...prevState, activites:newActivities};
          });
    }

    const deleteActivity = function(activityKey){
     const newActivities =state.activites;
     for (let index in newActivities) {
        if (newActivities[index].key === activityKey) {
            newActivities.splice(index, 1);
            break;
        }
      }
      setState((prevState) =>{
        return {...prevState, activites:newActivities};
      });
    }

    const setEditedActivityInfo = function(currentKey, currentName){
      console.log("set");
      setState((prevState)=>{
        return {...prevState, activityKey: currentKey, activityName: currentName }
      }) 
      console.log(state.activityName);
      console.log("currentName");
    }

    const editeActivity = function(activityKey, activityName){
        setEditedActivityInfo(-1, "");
        const newActivities= state.activites;
        let activityIdx = 0;
        for (let index in newActivities) {
           if (newActivities[index].key === activityKey) {
               activityIdx = index;
               break;
           }
        }
         newActivities[activityIdx].date = new Date().toLocaleString();
         newActivities[activityIdx].name = activityName;
         setState((prevState) =>{
            return {...prevState, activites:newActivities};
        });        
    }

    return(
        <View>
           <ImageBackground source={img} resizeMode="cover" style={styles.container}>
             <ActivityAddtion addActivityFun = {newActivity}  activityName ={state.activityName}/>
             <View style ={styles.list}>
                <ActivitiesList 
                   Activites= {state.activites} 
                   deleteActivityFun = {deleteActivity} 
                   editActivityFun = {setEditedActivityInfo}/>
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