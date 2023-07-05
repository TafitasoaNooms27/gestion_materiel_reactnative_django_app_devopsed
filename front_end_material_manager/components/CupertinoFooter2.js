import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterielCommunityIconsIcon from "react-native-vector-icons/MaterielCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function CupertinoFooter2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterielCommunityIconsIcon
          name="av-timer"
          style={[
            styles.icon,
            {
              color: props.active ? "#007AFF" : "#616161"
            }
          ]}
        ></MaterielCommunityIconsIcon>
        <Text
          style={[
            styles.btn1Caption,
            {
              color: props.active ? "#007AFF" : "#9E9E9E"
            }
          ]}
        >
          Dashboard
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper3}>
        <MaterielCommunityIconsIcon
          name="library-books"
          style={styles.icon2}
        ></MaterielCommunityIconsIcon>
        <Text style={styles.btn3Caption}>Orderbook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <MaterielCommunityIconsIcon
          name="poll"
          style={styles.icon3}
        ></MaterielCommunityIconsIcon>
        <Text style={styles.btn4Caption}>Stats</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}>
        <MaterielCommunityIconsIcon
          name="credit-card"
          style={styles.icon1}
        ></MaterielCommunityIconsIcon>
        <Text style={styles.btn2Caption}>Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper5}>
        <IoniconsIcon
          name="ios-heart-empty"
          style={styles.icon4}
        ></IoniconsIcon>
        <Text style={styles.btn5Caption}>Favorite</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "space-between"
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24
  },
  btn1Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12
  },
  btnWrapper3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  btn3Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  btn4Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  btn2Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  btn5Caption: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  }
});

export default CupertinoFooter2;
