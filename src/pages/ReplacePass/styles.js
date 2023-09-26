import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#020E17",
   },
   logo: {
      color: "#DDD",
      fontSize: 50,
      fontWeight: "bold",
      letterSpacing: 0.5,
      fontStyle: 'italic',
      marginBottom: 50,
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
   title: {
      color: "#3B5368",
      fontSize: 22,
      marginBottom: 25
   },
   containerButton: {
      width: '80%',
      height: 50,
      backgroundColor: "#3B5368",
      justifyContent: 'center',
      alignContent: 'center',
      borderRadius: 5
   },
   textButton: {
      color: "#020E17",
      textAlign: 'center',
      fontSize: 23,
      fontWeight: 'bold',
   },
   text: {
      color: '#3B5368',
      fontSize: 17,
      marginTop: 10
   }

})
