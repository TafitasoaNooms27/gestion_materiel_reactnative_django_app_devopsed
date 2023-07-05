import React, { Component, useRef } from "react";
import { StyleSheet, View, Alert } from "react-native";
import InDesign from "../components/InDesign";
import InPrix from "../components/InPrix";
import InQuantite from "../components/InQuantite";
import BtnSave from "../components/BtnSave";
import BtnCancel from "../components/BtnCancel";
import domain  from "../global";

function AjouterMateriel(props){
  const design = useRef()
  const etat = useRef()
  const quantite = useRef()
  const createMateriel = ()=>{
    const Materiel = {
      design: design.current.value,
      etat: etat.current.value,
      quantite: quantite.current.value,
    };
    console.log(Materiel)
    fetch(`${domain()}/api/materiels/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Materiel)
    }).then((res)=>res.json())
    .then((resJson)=>{
      alert("Creation de materiel reussi");
      Alert.alert('Creation de materiel reussi')
      props.navigation.navigate('Liste')
    }).catch((error)=>{
      console.error(error)
    })
  }
  return (
    <View style={styles.container}>
      <InDesign state={design} style={styles.MaterielHelperTextBox}></InDesign>
      <InPrix state={etat} style={styles.MaterielHelperTextBox}></InPrix>
      <InQuantite state={quantite} style={styles.MaterielHelperTextBox}></InQuantite>
      <View style={styles.MaterielButtonSuccessRow}>
        <BtnSave  style={styles.MaterielButtonSuccess} onPress={createMateriel}></BtnSave>
        <BtnCancel style={styles.MaterielButtonDanger} onPress={()=>props.navigation.navigate('Liste')}></BtnCancel>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  MaterielHelperTextBox: {
    height: 90,
    width: 325,
    marginTop: 46,
    marginLeft: 27
  },
  MaterielButtonSuccess: {
    height: 36,
    width: 131
  },
  MaterielButtonDanger: {
    height: 36,
    width: 120,
    marginLeft: 33
  },
  MaterielButtonSuccessRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 39,
    marginRight: 52
  }
});

export default AjouterMateriel;
