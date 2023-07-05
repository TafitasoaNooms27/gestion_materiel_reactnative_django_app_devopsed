import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function InDesign(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>Designation du materiel</Text>
      <TextInput ref={props.state} placeholder="Designation" style={styles.inputStyle}></TextInput>
      <Text style={styles.champObligatoire}>(champ obligatoire)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  label: {
    fontSize: 14,
    textAlign: "left",
    color: "#000",
    paddingTop: 16
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    lineHeight: 16,
    paddingTop: 8,
    flex: 1,
    paddingBottom: 8,
    width: 340
  },
  champObligatoire: {
    fontSize: 10,
    textAlign: "left",
    color: "rgba(4,255,251,1)",
    opacity: 0.6,
    paddingTop: 8
  }
});

export default InDesign;
