import  React from "react";
import { View, StyleSheet , TextInput,Platform,Alert } from "react-native";
import Appbutton from "./AppButton";

export default function ActivityAddtion({addActivityFun}){
    const btn = ["Add", 200, 50, "#fcd0c7", "#661825", 20]
    const [state, setState] = React.useState({activtyName: ""});
  
    const  emptyActivityAlert= () =>
    Alert.alert(
      "illegal Addtion",
      "Activity name can't be emtpy!",
      [
        { text: "Cancel"},
        { text: "OK"}
      ]
    );

    const onPress = () => () => {
        if(state.activtyName === ""){
            if(Platform.OS === "web"){
             confirm("Activity name can't be emtpy!");
            }
            else{
              emptyActivityAlert();
            }
        }
        else{
             addActivityFun(state.activtyName)
             setState((prevState) => {
                return {...prevState, 
                    activtyName : ""};
                });
        }
      };

   
    return(
        <View style = {styles.container}>
            <TextInput 
             style= {styles.inputStyle}
             value= {state.activtyName}
             placeholder= "Enter your activity"
             onChangeText={(name)=>{
                setState((prevState) => {
                    return {...prevState, 
                        activtyName : name};
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
        backgroundColor: "#4c3e3c",
        borderRadius:4,
        borderWidth:2,
        height: 60,
        width:300,
        marginTop: 70,
        textAlign:"center",
        fontFamily: "timesNewRoman",
        fontStyle: "italic",
        fontSize: 18,
        color: "#fcd0c7",
    }
});


      // const callback = useCallback((activityName) => {
      //   setState(activityName);
      // }, []);..