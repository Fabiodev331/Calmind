import React, { createContext, useState, useEffect } from "react";

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from "../services/firebaseConnection";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getApp } from "firebase/app";

export const AuthContext = createContext({});

export default function AuthProvider({ children }){
   const [user, setUser] = useState(null);
   const [loadingAuth, setLoadingAuth] = useState(false);
   const [loading, setLoading] = useState(true);

   const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);
   const db = getFirestore(app);
   const firebaseApp = getApp();

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
   },[user])
 
   async function signUp(email, password, name){ 
      setLoadingAuth(true);
      await createUserWithEmailAndPassword(auth, email, password)
      .then( async (value) => {
         const uid = value.user.uid;
         //console.log('criada')

         try {  await addDoc(collection(db, "users"), {
            uid: uid,
            name: name,
            email: email,
          });
          //console.log("Documento criado com sucesso")
         } catch (error) {
            console.log(error)
         }
         let data = {
            email: value.user.email,
            name: name,
            uid: uid,
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
   async function signIn(email, password){
      setLoadingAuth(true);
      await signInWithEmailAndPassword(auth, email, password)
      .then( async(value) => {
         //console.log('Logado')
         const user = value.user;

         const querySnapshot = await getDocs(collection(db, "users"));
         querySnapshot.forEach((doc) => {
            
            if(doc.data().email === user.email ){
               setUser(doc.data())
               storageUser(doc.data())
            }

            setLoadingAuth(false);
         }); 

      })
      .catch((error) => {
         console.log(error)
         setLoadingAuth(false);
      })
   }
   async function SignOut(){
      await AsyncStorage.clear();
      await signOut(auth)
      .then(() => {
         setUser(null);
      })
   }

   async function storageUser(data){
      await AsyncStorage.setItem('@calmind', JSON.stringify(data))
   }

   async function handleFirebaseStorage(){
      const storage = getStorage(firebaseApp, "gs://calmind-b31b7.appspot.com/");
      console.log(storage)
   }

   return(
      <AuthContext.Provider 
      value={{ 
         signed: !!user, 
         signUp, 
         signIn, 
         SignOut, 
         loadingAuth, 
         loading, 
         user,
         handleFirebaseStorage
      }}>
         {children}
      </AuthContext.Provider>
   )
}
