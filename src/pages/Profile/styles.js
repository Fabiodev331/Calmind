import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#020E17",
   },
   text: {
      color: "#3B5368",
      fontSize: 30,
      fontWeight: "bold",
      letterSpacing: 0.5,
      fontStyle: 'italic',
      marginBottom: 30,
      fontFamily: 'sans-serif'
   },
   input: {
      width: "80%",
      height: 50,
      fontSize: 18,
      borderWidth: 1,
      borderColor: "#3B5368",
      borderRadius: 5,
      padding: 10,
      color: "#3B5368",
      marginBottom: 20
   },
   button: {
      width: '80%',
      height: 50,
      backgroundColor: "#3B5368",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginBottom: 25
   },
   buttonOut: {
      width: '25%',
      height: 50,
      backgroundColor: "#ddd",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      opacity: 0.8
   },
   buttonText: {
      color: "#020E17",
      fontSize: 20,
      fontWeight: 'bold'

   }

})