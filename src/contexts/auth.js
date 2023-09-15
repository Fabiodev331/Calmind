import React, { createContext, useState, useEffect } from "react";

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from "../services/firebaseConnection";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

export default function AuthProvider({ children }){
   const [user, setUser] = useState(null);
   const [loadingAuth, setLoadingAuth] = useState(false);
   const [loading, setLoading] = useState(true);
   const [nameUser, setNameUser] = useState('');

   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

   useEffect(()=> {
      async function loadStorage(){
         const storageUser = await AsyncStorage.getItem('@calmind');

         if(storageUser){
            setUser(JSON.parse(storageUser));
            setLoading(false);
         }
         setLoading(false);
      }
      loadStorage();
   },[])

   async function signUp(email, password, name){
      setLoadingAuth(true);
      await createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
         console.log('criada')
         const userData = value.user;
         console.log(userData)

         let data = {
            uid: value.user.uid,
            name: name,
            email: value.user.email
         }
         setUser(data);
         storageUser(data);
         setNameUser(data.name);
         setLoadingAuth(false);
      })
      .catch((error) => {
         console.log(error)
         setLoadingAuth(false);
      })
   }
   async function signIn(email, password){
      setLoadingAuth(true);
      await signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
         console.log('criada')
         const user = value.user;
         console.log(user)

         let data = {
            uid: value.user.uid,
            email: value.user.email
         }
         setUser(data);
         storageUser(data);
         setLoadingAuth(false);
      })
      .catch((error) => {
         console.log(error)
         setLoadingAuth(false);
      })
   }
   async function SignOut(){
      await signOut(auth);
      await AsyncStorage.clear()
      .then(() => {
         setUser(null);
      })
   }

   async function storageUser(data){
      await AsyncStorage.setItem('@calmind', JSON.stringify(data))
   }

   return(
      <AuthContext.Provider value={{ signed: !!user, signUp, signIn, SignOut, loadingAuth, loading }}>
         {children}
      </AuthContext.Provider>
   )
}
