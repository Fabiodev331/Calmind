import React from "react";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";


export default function ContainerList(){
   const navigation = useNavigation();

   return(
      <ScrollView>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Video01')}>
         <LinearGradient 
         style={styles.container}
         colors={["#3B5368", "#020E17"]}
         start={{x: 0, y: 0}}
         end={{x: 0, y: 1.5}}
         >
            <Text style={styles.nome}>
               Mente
            </Text>
            <FontAwesome name="car" color="#020E17" size={55} />
            
         </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
         <LinearGradient 
         style={styles.container}
         colors={["#3B5368", "#020E17"]}
         start={{x: 0, y: 0}}
         end={{x: 0, y: 1.5}}
         >
            <Text style={styles.nome}>
               Relaxar
            </Text>
            <FontAwesome name="compress" color="#020E17" size={55} />
            
         </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
         <LinearGradient 
         style={styles.container}
         colors={["#3B5368", "#020E17"]}
         start={{x: 0, y: 0}}
         end={{x: 0, y: 1.5}}
         >
            <Text style={styles.nome}>
               Descanso
            </Text>
            <FontAwesome name="bed" color="#020E17" size={55} />
            
         </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
         <LinearGradient 
         style={styles.container}
         colors={["#3B5368", "#020E17"]}
         start={{x: 0, y: 0}}
         end={{x: 0, y: 1.5}}
         >
            <Text style={styles.nome}>
               Foco
            </Text>
            <FontAwesome name="rocket" color="#020E17" size={55} />
            
         </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
         <LinearGradient 
         style={styles.container}
         colors={["#3B5368", "#020E17"]}
         start={{x: 0, y: 0}}
         end={{x: 0, y: 1.5}}
         >
            <Text style={styles.nome}>
               Corpo
            </Text>
            <FontAwesome name="male" color="#020E17" size={55} />
            
         </LinearGradient>
      </TouchableOpacity>
      </ScrollView>
   )
} 
