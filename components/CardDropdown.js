import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {styles} from "../styles/CardDropdown"

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

