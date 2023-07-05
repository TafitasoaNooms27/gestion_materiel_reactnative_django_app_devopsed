import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function InQuantite(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.quantiteDuMateriel}>Quantite du materiel</Text>
      <TextInput ref={props.state} placeholder="Quantite" style={styles.inputStyle}></TextInput>
      <Text style={styles.quantite2}>(quantite)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  quantiteDuMateriel: {
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
  quantite2: {
    fontSize: 10,
    textAlign: "left",
    color: "rgba(7,243,247,1)",
    opacity: 0.6,
    paddingTop: 8
  }
});

export default InQuantite;
