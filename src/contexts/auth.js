import React, { createContext, useState, useEffect } from "react";

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { firebaseConfig } from "../services/firebaseConnection";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getDocs, setDoc, updateDoc, doc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

export default function AuthProvider({ children }){
   const [user, setUser] = useState(null);
   const [loadingAuth, setLoadingAuth] = useState(false);
   const [loading, setLoading] = useState(true);

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

         try {  await setDoc(doc(db, "users", uid), {
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
         querySnapshot.forEach((respose) => {
            
            if(respose.data().email === user.email ){
               setUser(respose.data())
               storageUser(respose.data())
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

   async function updateUser(name){
      const docRef = doc(db, "users", user?.uid);
      await updateDoc(docRef, {
         name: name
      })
      let data = {
         email: user.email,
         name: name,
         uid: user.uid,
      }
      setUser(data);
      storageUser(data);
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
         handleFirebaseStorage,
         updateUser
      }}>
         {children}
      </AuthContext.Provider>
   )
}
