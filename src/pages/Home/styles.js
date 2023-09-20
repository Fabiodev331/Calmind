import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#020E17",
   },
   top: {
      display: 'flex',
      flexDirection:"row",
      justifyContent: 'space-between',
      marginLeft: 15,
      marginRight: 15,
      marginTop: 15,
      marginBottom: 25
   },
   text: {
      fontSize: 22,
      fontWeight: 'bold',
      color: "#3B5368",
      marginTop: 5,
      textAlign: 'center',
      marginBottom: 10
   },
   buttonOut: {
      width: 65,
      height: 40,
      backgroundColor: "#DDD",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
   },
   buttonText: {
      color: "#020E17",
      fontSize: 20,
      fontWeight: 'bold'
   }

})
