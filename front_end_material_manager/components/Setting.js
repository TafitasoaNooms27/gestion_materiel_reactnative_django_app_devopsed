import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterielCommunityIcons";

function Setting(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="dots-vertical" style={styles.rightIcon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 11,
    alignItems: "center"
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  }
});

export default Setting;
