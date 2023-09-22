import React, { useContext } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { Video, ResizeMode } from 'expo-av';


import { AuthContext } from "../../contexts/auth";

export default function Video01(){
   const {handleFirebaseStorage} = useContext(AuthContext);
   const video = React.useRef(null);

   
   return(
      <View style={styles.container}>
         <Text style={styles.title}>Mantenha a mente tranquila</Text>

         <View style={styles.containerVideo}>
               <Video
               ref={video}
               style={styles.video}
               source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/calmind-b31b7.appspot.com/o/Paisagens%20em%20movimento.mp4?alt=media&token=1ba7331e-4f64-4ddd-aa0e-a44fd5059d69',
               }}
               useNativeControls
               resizeMode="cover"
               isLooping
               />
         </View>

         <Text style={styles.title}>Descrição:</Text>
         <Text style={styles.description}>
            Maravilhoso mesmo é: ter paz na alma, sossego na mente, consciência tranquila 
            e calma no coração. O ser humano precisa de tão pouco pra ser feliz. Mas, 
            quando decide procurar felicidade fora de si, se depara com mares de 
            dificuldades e conflitos
         </Text>

      </View>
   )
}