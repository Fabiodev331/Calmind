import React, {useState, useContext} from "react";
import { View, Text, Button, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./styles";

import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/auth";


export default function Profile(){
   const {SignOut, user} = useContext(AuthContext);

   const [name, setName] = useState(user.name);
   const [email, setEmail] = useState(user.email);
   const [isEditable, setIsEditable] = useState(false);

   


   async function handleSignOut(){
      await SignOut();
   }

   return (
      <View style={styles.container}>
         <Text style={styles.text} >Atualizar perfil</Text>
         <TextInput
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Name"
            placeholderTextColor="#3B5368"
            style={styles.input}
         />
         <TextInput
            editable={isEditable}
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            placeholderTextColor="#3B5368"
            style={styles.input}
         />

            <TouchableOpacity style={styles.button} onPress={handleSignOut}>
               <Text style={styles.buttonText}>Atualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonOut} onPress={handleSignOut}>
               <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
         
      </View>
   )
}