import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
     marginLeft:"auto",
     marginRight:"auto"
    },
     cardcontainer: {
       width: "96%",
       height: "auto",
       elevation: 5,
       backgroundColor: "white",
       borderRadius: 10,
       borderLeftWidth: 10,
       borderLeftColor: "tomato",
       paddingVertical: 15,
       paddingHorizontal: 10,
       marginTop: 30,
     },
     textcontainer: {
       display: "flex",
       flexDirection: "row",
       justifyContent: "space-between",
       paddingTop: 10,
     },
     smalltext: {
       fontSize: 12,
       marginBottom: 5,
       color: "#afb1ae",
     },
     verticleline: {
       borderRightWidth: 1,
       marginRight: 15,
       borderColor: "#e5e5e5",
       height: 35,
       marginTop: 10,
     },
     flexcontainer: {
       display: "flex",
       flexDirection: "row",
     },
     text: {
       paddingRight: 19,
     },
     datecontainer: {
       display: "flex",
       flexDirection: "row",
       paddingTop: 10,
     },
     date: {
       fontSize: 11,
       marginBottom: 5,
       color: "#afb1ae",
       borderRightWidth: 1,
       paddingRight: 8,
       borderRightColor: "#e5e5e5",
     },
     time: {
       fontSize: 11,
       color: "#afb1ae",
       paddingLeft: 10,
     },
     bulletin: {
       fontSize: 25,
       color: "pink",
     },
   });
   