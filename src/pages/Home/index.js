import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import Header from "../../components/Header";

import { AuthContext } from "../../contexts/auth";

export default function Home(){
   const {SignOut} = useContext(AuthContext);

   async function handleSignOut(){
      await SignOut();
   }
   return(
      <View style={styles.container}>
         <Header/>
         <Text style={styles.text}>Bem vindo(a) </Text>

         <TouchableOpacity onPress={handleSignOut}>
            <Text style={styles.text}>Sair</Text>
         </TouchableOpacity>
      </View>
   )
}