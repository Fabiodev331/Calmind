import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import { getApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth, sendPasswordResetEmail } from 'firebase/auth';
import {initializeApp} from 'firebase/app';

export default function ReplacePass(){
   const [userEmail, setUserEmail] = useState('');
   const navigation = useNavigation();

   if (!getApps().length) {
      try {
        app = initializeApp(firebaseConfig);
        auth = initializeAuth(app, {
          persistence: getReactNativePersistence(AsyncStorage),
        });
      } catch (error) {
        console.log("Error initializing app: " + error);
      }
    } else {
      app = getApp();
      auth = getAuth(app);
    }

   function handlePassWord(){
      if(userEmail === ''){
         alert("Informe seu email cadastrado!")
         return;
      }
      sendPasswordResetEmail(auth, userEmail)
      .then(()=> {
         alert("email enviado para: " + userEmail + "verifique seu email");
         navigation.navigate('Login');
      })
      .catch((error)=> {
         alert("Ops! Algo deu errado, tente novamente!")
      })

   }
   return(
      <View style={styles.container}>
          <Text style={styles.logo}>
            Cal<Text style={{color: "#3B5368"}}>mind</Text>
         </Text>
         <Text style={styles.title}>Redefinição de senha</Text>
         <TextInput
            value={userEmail}
            onChangeText={text => setUserEmail(text)}
            placeholder="Informe seu email"
            autoCapitalize="none"
            placeholderTextColor="#3B5368"
            style={styles.input}
         />
         <TouchableOpacity 
         style={styles.containerButton} 
         onPress={handlePassWord}
         >
               <Text style={styles.textButton}>Enviar</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
               <Text style={styles.text}>Voltar</Text>
            </TouchableOpacity>
      </View>
   )
}