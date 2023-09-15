import React from "react";
import { Text, SafeAreaView } from "react-native";
import { styles } from "./styles";

export default function Header(){
   return(
      <SafeAreaView style={styles.container}>
         <Text style={styles.logo}>
            Cal<Text style={{color: "#3B5368"}}>mind</Text>
         </Text>
      </SafeAreaView>
   )
}
