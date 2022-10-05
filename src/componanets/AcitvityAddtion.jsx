import  React from "react";
import { View, StyleSheet , TextInput,Platform,Alert } from "react-native";
import Appbutton from "./AppButton";

export default function ActivityAddtion({addActivityFun, currentActivityName}){
    const btn = ["Add", 200, 50, "#fcd0c7", "#661825", 20]
    const [state, setState] = React.useState({activityName: ""});
  
    const  emptyActivityAlert= function(){
    Alert.alert(
      "illegal Addtion",
      "Activity name can't be emtpy!",
      [
        { text: "Cancel"},
        { text: "OK"}
      ]
    );
    }
    
    
    const launchEpmtyTxtAlert= function(){
      if(Platform.OS === "web"){
        confirm("Activity name can't be emtpy");
       }
       else{
         emptyActivityAlert();
       }
    }

    
    const onPress = () => () => {
       if(!state.activityName ){
          launchEpmtyTxtAlert();
        }
        else{
             addActivityFun(state.activityName);
             clearInputTextValue();
        }
    }

      const clearInputTextValue =function () {
        setState((prevState) => {
          return {...prevState, 
              activityName : ""};
          });
      }
      

    return(
        <View style = {styles.container}>
            <TextInput 
             style= {styles.inputStyle}
             multiline
             numberOfLines={2}
             value=  {state.activityName} //{currentActivityName} 
             placeholder= "Enter your activity"
             onChangeText={(name)=>{
              setState((prevState) => {
                return {...prevState, 
                    activityName : name};
                 });
              }}
             >
             </TextInput>
             <View>
               <Appbutton 
                 btnName ={btn[0]}
                 width = {btn[1]}
                 hight= {btn[2]}
                 color= {btn[3]} 
                 backgroundColor= {btn[4]}
                 margin= {btn[5]}
                 onPressFun= {onPress()}
                 />
             </View>
        </View>
    )
}


const styles = StyleSheet.create({
  
    container:{
        flex:1,
        alignItems: "center",
    },
  
    inputStyle:{
        borderColor: "#661825",
        backgroundColor: "#b18e72",
        borderRadius:4,
        borderWidth:2,
        height: 60,
        width:300,
        marginTop: 70,
        textAlign:"center",
        fontFamily: "timesNewRoman",
        fontStyle: "italic",
        fontSize: 18,
        color: "white",
    }
});

