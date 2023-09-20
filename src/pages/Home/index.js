import React, { useContext, useState } from "react";
import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";

import Header from "../../components/Header";
import ContainerList from "../../components/ContainerList";

import { AuthContext } from "../../contexts/auth";

export default function Home(){
   const {SignOut, nameUser} = useContext(AuthContext);

   const [posts, setPosts] = useState ([
      {id: 1, name: "Mente"},
      {id: 2, name: "Acalmar"},
      {id: 3, name: "Relaxar"},
      {id: 4, name: "Respire"},
      {id: 5, name: "Silêncio"},
   ])

   async function handleSignOut(){
      await SignOut();
   }
   return(
      <View style={styles.container}>
         <Header/>
         <View style={styles.top}>
            <Text style={styles.text}>Olá {nameUser} </Text>

            <TouchableOpacity style={styles.buttonOut} onPress={handleSignOut}>
               <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
         </View>
        
         <ContainerList/>
      </View>
   )
}