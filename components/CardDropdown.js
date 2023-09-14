import { View, Text, StyleSheet } from "react-native";
import React from "react";

const CardDropdown = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.smalltext}>Location</Text>
        <View style={styles.textcontainer}>
          <Text style={styles.text}>Termianl 1 </Text>
          <View style={styles.verticleline}></View>
          <Text style={styles.text}>South Finger </Text>
          <View style={styles.verticleline}></View>
          <Text style={styles.text}>Level 4</Text>
          <View style={styles.verticleline}></View>
          <Text style={styles.text}>Office Toilet</Text>
        </View>
        <Text>(Female) T1-T322</Text>
      </View>
      <View style={styles.flexcontainer}>
        <View style={styles.container}>
          <Text style={styles.smalltext}>Report Source</Text>
          <Text>FMS</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.smalltext}>Nature of fault</Text>
          <Text>(FDD) High Supply Air status{'\n'} Pressure</Text>
        </View>
      </View>
      <View style={styles.flexcontainer}>
         <Text style={styles.smalltext}>Subject :</Text>
         <Text style={styles.smallblacktext}>High Supply Air Static Presuure</Text>
      </View>
    </View>
  );
};

export default CardDropdown;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 15,
    marginTop: 15,
  },
  textcontainer: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 6,
  },
  smalltext: {
    color: "#afb1ae",
    fontSize: 12,
  },
  text: {
    fontSize:13
  },
  flexcontainer:{
    display:"flex",
    flexDirection:"row",
    columnGap:10,
    marginBottom:10
  },
  smallblacktext:{
    fontSize:12
  },
  verticleline:{
    borderLeftWidth:1,
    marginHorizontal:7,
    marginVertical:3,
    borderColor:"#e5e5e5"
  }
});
