import React, { Component, useRef, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import CupertinoButtonSuccess from "../components/CupertinoButtonSuccess";
import MaterielStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Login({navigation}) {
  const username=useRef();
  const password=useRef();

  const seLogger=()=>{
    // if(username.current.value=="" || password.current.value==""){
    //   Alert.alert("Username ou mot de passe vide!");
    //   alert("Username ou mot de passe vide!");
    // }else if(username.current.value=="react" && password.current.value=="react"){
        navigation.navigate("Liste");
    // } else {
    //   Alert.alert("Username ou mot de passe incorrect!");
    //   alert("Username ou mot de passe incorrect!");
    // }
  }

  return (
    <View style={styles.container}>
      <Icon name="account-key" style={styles.icon}></Icon>
      <CupertinoButtonSuccess
        function={seLogger}
        style={styles.cupertinoButtonSuccess}
      ></CupertinoButtonSuccess>
      <MaterielStackedLabelTextbox
        state={username}
        text="Username"
        type={false}
        style={styles.MaterielStackedLabelTextbox}
      ></MaterielStackedLabelTextbox>
      <MaterielStackedLabelTextbox
        state={password}
        text="Password"
        type={true}
        style={styles.MaterielStackedLabelTextbox2}
      ></MaterielStackedLabelTextbox>
      <Text style={styles.authentification}>AUTHENTIFICATION</Text>
      <Text style={styles.signUp}>Sign Up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cupertinoButtonSuccess: {
    height: 44,
    width: 179,
    marginTop: 307,
    marginLeft: 90,
  },
  MaterielStackedLabelTextbox: {
    height: 60,
    width: 290,
    marginTop: -243,
    marginLeft: 49,
  },
  MaterielStackedLabelTextbox2: {
    height: 60,
    width: 290,
    marginTop: 18,
    marginLeft: 49,
  },
  authentification: {
    fontFamily: "arial",
    color: "#121212",
    fontSize: 24,
    marginTop: -193,
    marginLeft: 100,
  },
  signUp: {
    fontFamily: "roboto-regular",
    color: "rgba(20,245,241,1)",
    marginTop: 300,
    marginLeft: 170,
  },
  icon: {
    color: "#0ff",
    fontSize: 100,
    marginTop: 50,
    alignSelf: "center",
  },
});

export default Login;
