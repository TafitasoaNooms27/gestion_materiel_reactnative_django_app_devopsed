import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function MaterielStackedLabelTextbox(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.password}>{props.text}</Text>
      <TextInput
        secureTextEntry={props.type}
        ref={props.state}
        placeholder=""
        style={styles.inputStyle}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    backgroundColor: "transparent"
  },
  password: {
    fontSize: 12,
    textAlign: "left",
    color: "#000",
    opacity: 0.6,
    paddingTop: 16,
    left: 0,
    width: 72,
    top: 1,
    height: 30
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 8,
    paddingBottom: 8
  }
});

export default MaterielStackedLabelTextbox;
