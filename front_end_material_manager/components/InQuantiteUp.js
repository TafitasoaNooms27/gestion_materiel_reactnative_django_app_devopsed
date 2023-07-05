import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

function InQuantiteUp(props) {
  const [qte,setQte]=useState(props.value)
  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.quantiteDuMateriel}>Quantite du materiel</Text>
      <TextInput ref={props.state} value={qte} editable={true} onChangeText={(x)=> setQte(x)}
      style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#D9D5DC",
    backgroundColor: "transparent",
  },
  quantiteDuMateriel: {
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
    marginTop: 5,
  },
});

export default InQuantiteUp;
