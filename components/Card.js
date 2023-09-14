import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import CardDropdown from "./CardDropdown";

const Card = ({ navigation }) => {
  //state initialization for the visibility of dropdown
  const [isdropdownVisible, setDropdown] = useState(false);

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("Navigation");
      }}
    >
      <View style={styles.cardcontainer}>
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
              <Text style={{ marginTop: 6 }}>Re-routed</Text>
              <TouchableOpacity
                onPress={() => {
                  setDropdown((prev) => !prev);
                }}
              >
                {isdropdownVisible ? (
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={25}
                    color={"orange"}
                    style={{ marginTop: 3 }}
                  />
                ) : (
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={25}
                    color={"orange"}
                    style={{ marginTop: 3 }}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.datecontainer}>
          <Text style={styles.date}>23 july 2023</Text>
          <Text style={styles.time}>3:30 pm</Text>
        </View>
        {isdropdownVisible && <CardDropdown />}
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
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
    borderWidth: 1,
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
