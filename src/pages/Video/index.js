import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

import Header from "../../components/Header";

export default function Home(){

   return(
      <View style={styles.container}>
         <Text style={styles.text}>Página vídeo</Text>
      </View>
   )
}