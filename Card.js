import { View, Text, StyleSheet } from "react-native";
import React , {useState} from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Card = () => {
  //state initialization for the visibility of dropdown  
  const [isdropdownVisible , setDropdown] = useState(false) 
  return (
    <View style={styles.container}>
      <View style={styles.textcontainer}>
        <View style={styles.text}>
          <Text style={styles.smalltext}>BFR No</Text>
          <Text>396767</Text>
        </View>
        <View style={styles.verticleline}></View>
        <View style={styles.text}>
          <Text style={styles.smalltext}>Site</Text>
          <Text>
            Ancillary{"\n"}
            Buildings(West)
          </Text>
        </View>
        <View style={styles.verticleline}></View>
        <View>
          <Text style={styles.smalltext}>Status</Text>
          <View style={styles.flexcontainer}>
            <Text style={styles.bulletin}>{`\u2022`}</Text>
            <Text style={{marginTop:6}}>Re-routed</Text>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={25}
              color={"orange"}
              style={{marginTop:3}}
            />
          </View>
        </View>
      </View>
      <View style={styles.datecontainer}>
        <Text style={styles.date}>23 july 2023</Text>
        <Text  style={styles.time}>3:30 pm</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "96%",
    height: 120,
    elevation: 5,
    backgroundColor: "white",
    borderRadius: 10,
    borderLeftWidth: 10,
    borderLeftColor: "tomato",
    paddingVertical: 15,
    paddingHorizontal:10
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
    color: "#e5e5e5",
  },
  verticleline: {
    borderWidth: 1,
    marginRight: 15,
    borderColor: "#e5e5e5",
    height: 35,
    marginTop: 10,
  },
  flexcontainer:{
    display:"flex",
    flexDirection:"row",
  }, 
  text:{
   paddingRight:19
  },
  datecontainer:{
    display:"flex",
    flexDirection:"row",
    paddingTop:10
  },
  date: {
    fontSize: 11,
    marginBottom: 5,
    color: "#e5e5e5",
    borderRightWidth:1,
    paddingRight:8,
    borderRightColor:"#e5e5e5"
  },
  time:{
    fontSize:11,
    color:"#e5e5e5",
    paddingLeft:10
  },
  bulletin:{
    fontSize:25,
    color:"pink"
  }
});
