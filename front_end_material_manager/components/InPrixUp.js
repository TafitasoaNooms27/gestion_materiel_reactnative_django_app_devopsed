import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function InPrixUp(props) {
  const [prix,setPrix]=useState(props.value)
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.label}>Etat (BON, MAUVAIS, ABIME)</Text>
      <TextInput ref={props.state} value={prix} onChangeText={(prix)=>setPrix(prix)} style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
  },
  label: {
    fontSize: 14,
    textAlign: "left",
    color: "#000",
    paddingTop: 16,
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    marginTop: 5
  },
});

export default InPrixUp;
