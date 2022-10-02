import React from "react";
import {View, StyleSheet, Text, Platform,Alert} from "react-native"
import Appbutton from "./AppButton";

export default function Activity({ActivityKey, ActivityName , CurrentDate, deleteActivity}){
    const EditBtn = ["Edit", 70, 50, "#fcd0c7", "#661825", 10]
    const deleteBtn = ["Delete", 70 , 50, "red", "black", 10]
    const [state, setState] = React.useState({activityKey: ActivityKey, activityName:ActivityName, currentDate: CurrentDate });

    const  deleteActivityAlert= () =>
  
    Alert.alert(
      "Delete Activity?",
      "Are you sure that you whant to delete the Activity?",
      [
        { text: "Cancel"},
        { 
          text: "OK" ,
          onPress: () => {
            return deleteActivity(state.activityKey);
          }
        }
      ]
    );

    const deleteActivityFun = function(){
     if(Platform.OS === "web"){
      deleteActivity(state.activityKey);
     }
     else{
      deleteActivityAlert();
     }
    }

    const editItem = () => () =>{
  
    //     for (let index in activites) {
    //       if (activites[index].key === state.activityKey) {
    //           activites.splice(index, 1);
    //       }
    //     }
      }

    return(
      <View style= {styles.container}>
        <View>
           <Text key={ActivityKey} style= {styles.nameStyle}> 
                {ActivityName}
            </Text>
            <Text style= {styles.dateStyle}>
                 {CurrentDate}
            </Text>
        </View>
        <View style = {styles.btnsStyle}>
         <Appbutton
         btnName ={EditBtn[0]}
         width = {EditBtn[1]}
         hight= {EditBtn[2]}
         color= {EditBtn[3]} 
         backgroundColor= {EditBtn[4]}
         margin= {EditBtn[5]}
         />
  

        <Appbutton
         btnName ={deleteBtn[0]}
         width = {deleteBtn[1]}
         hight= {deleteBtn[2]}
         color= {deleteBtn[3]} 
         backgroundColor= {deleteBtn[4]}
         margin= {deleteBtn[5]}

         onPressFun= {deleteActivityFun}/>

        </View>
      </View>
    )

  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems:"center",
        width: 320,
        hight: 150,
        borderColor: "#661825",
        borderWidth: 2,
        borderRadius: 7,
        margin: 10,
      },

      btnsStyle: {
        flex:1,
        flexDirection: "row",
        justifyContent: "flex-end"
      },

      nameStyle:{
         color: "#fcd0c7",
         fontSize: 17,
         fontStyle:"italic",
         fontFamily: "timesNewRoman",
         marginTop:10,
         marginLeft:5,
        },
        
        dateStyle:{
             color: "#fcd0c7",
             fontSize: 14,
             fontStyle:"italic",
             fontFamily: "timesNewRoman",
             marginTop:5,
             marginLeft:5,
        },
      });


