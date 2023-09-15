import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";

import AuthRoutes from "./auth.app";
import AppRoutes from "./app.routes";

import { AuthContext } from "../contexts/auth";

export default function Routes(){
   const { signed, loading }= useContext(AuthContext);

   if(loading){
      return(
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#020E17' }}>
         <ActivityIndicator
         size={50}
         color="#3B5368"
         />
      </View>
      )
   }
   return(
      signed ? <AppRoutes/> : <AuthRoutes/>
   )
}