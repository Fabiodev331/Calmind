import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../pages/Login";
import ReplacePass from "../pages/ReplacePass";

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
   return(
      <Stack.Navigator>
         <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
         <Stack.Screen name="ReplacePass" component={ReplacePass} options={{headerShown: false}}/>
      </Stack.Navigator>
   )
}