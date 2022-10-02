import React from "react";
import { FlatList, View} from 'react-native';
import Activity from './Activity';

export default function ActivitiesList({Activites, deleteActivityFun}){

    return(
      <View>
        <FlatList
         data={Activites}
         extraData = {Activites}
         renderItem={( {item} )=> (
             <Activity 
               ActivityKey= {item.key}
               ActivityName={item.name}
               CurrentDate={item.date}
               deleteActivity = {deleteActivityFun}
               />)}
            />
      </View>
    )
}

