import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Video01 from "../pages/Video01";

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
   return(
      <Stack.Navigator>
         <Stack.Screen 
         name="Home" 
         component={Home} 
         options={{headerShown: false}}
         />
         
         <Stack.Screen 
         name="Video01" 
         component={Video01} 
         options={{title: 'Mente',
         headerStyle: {
            backgroundColor: "#3B5368"
         },
         headerTitleStyle: {
            color: "#020E17",
            fontSize: 25
         },
         }}
         
         />
      </Stack.Navigator>
   )
}