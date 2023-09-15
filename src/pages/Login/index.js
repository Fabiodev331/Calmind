import React, {useState, useContext} from "react";
import { View, Text, Button, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { styles } from "./styles";

import { Feather } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/auth";


export default function Login(){
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [visible, setVisible] = useState(false);
   const [login, setLogin] = useState(true);

   const {signUp, signIn, loadingAuth} = useContext(AuthContext)


   function toggleLogin(){
      setLogin(!login)
      setName('')
      setEmail('')
      setPassword('')
   }

   async function handleSignIn(){
      if(email === '' || password === ''){
         alert("PREENCHA TODOS OS CAMPOS")
      }
      // fazerlogin 
      await signIn(email, password)
   }

   async function handleSignUp(){
      if(name === '' || email === '' || password === ''){
         alert("PREENCHA TODOS OS CAMPOS")
      }
      if(password.length < 6){
         alert("A senha deve ter 6 digitos")
      }
      await signUp(email, password, name)
   }

   if(login){
      return (
         <View style={styles.container}>
            <Text style={styles.logo}>
               Cal<Text style={{color: "#3B5368"}}>mind</Text>
            </Text>
            <TextInput
               value={email}
               onChangeText={text => setEmail(text)}
               placeholder="Email"
               placeholderTextColor="#3B5368"
               style={styles.input}
            />
            <View style={styles.containerInputPassword}>
               <TextInput
                  value={password}
                  onChangeText={text => setPassword(text)}
                  placeholder="Password"
                  placeholderTextColor="#3B5368"
                  style={styles.inputPassword}
                  secureTextEntry={!visible}
               />
               <TouchableOpacity
               onPress={() => setVisible(!visible)}
               >
                 {visible === true ? 
                 <Feather name="eye" size={24} color="#3B5368"/>
                 :  <Feather name="eye-off" size={24} color="#3B5368"/>
               }
               </TouchableOpacity>
            </View>
            <TouchableOpacity>
               <Text style={styles.text}>Esqueceu a senha?</Text>
            </TouchableOpacity>
   
            <TouchableOpacity 
            style={styles.containerButton}
            onPress={handleSignIn}
            >
               {loadingAuth ? (
                  <ActivityIndicator size={24} color="#020E17"/>
               ) : (
                     <Text style={styles.textButton}>Entrar</Text>
                  )}
               
            </TouchableOpacity>
   
            <TouchableOpacity onPress={toggleLogin}>
               <Text style={styles.text}>Criar uma conta</Text>
            </TouchableOpacity>
            
         </View>
      )
   }
   return (
      <View style={styles.container}>
         <Text style={styles.logo}>
            Cal<Text style={{color: "#3B5368"}}>mind</Text>
         </Text>
         <TextInput
            value={name}
            onChangeText={text => setName(text)}
            placeholder="Name"
            placeholderTextColor="#3B5368"
            style={styles.input}
         />
         <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            placeholderTextColor="#3B5368"
            style={styles.input}
         />
         <View style={styles.containerInputPassword}>
            <TextInput
               value={password}
               onChangeText={text => setPassword(text)}
               placeholder="Password"
               placeholderTextColor="#3B5368"
               style={styles.inputPassword}
               secureTextEntry={!visible}
            />
            <TouchableOpacity
            onPress={() => setVisible(!visible)}
            >
              {visible === true ? 
              <Feather name="eye" size={24} color="#3B5368"/>
              :  <Feather name="eye-off" size={24} color="#3B5368"/>
            }
            </TouchableOpacity>
         </View>

         <TouchableOpacity 
         style={styles.containerButton}
         onPress={handleSignUp}
         >
            {loadingAuth ? (
               <ActivityIndicator size={24} color="#020E17"/>
            ) : (
                  <Text style={styles.textButton}>Cadastrar</Text>
               )}
            
         </TouchableOpacity>

         <TouchableOpacity onPress={toggleLogin}>
            <Text style={styles.text}>Já possuo uma conta</Text>
         </TouchableOpacity>
         
      </View>
   )
}