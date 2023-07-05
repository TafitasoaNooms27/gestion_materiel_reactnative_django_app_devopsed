import React, { Component, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import { StyleSheet, View,Alert } from "react-native";
import BtnSaveUp from "../components/BtnSaveUp";
import BtnCancelUp from "../components/BtnCancelUp";
import InDesignUp from "../components/InDesignUp";
import InPrixUp from "../components/InPrixUp";
import InQuantiteUp from "../components/InQuantiteUp";
import domain  from "../global";

function UpdateMateriel(props) {
  const route = useRoute()
  const id = route.params.ID
  const olddesign = route.params.DESIGN
  const oldetat = route.params.ETAT
  const oldquantite = route.params.QUANTITE
  const design = useRef()
  const etat = useRef()
  const quantite = useRef()

  const updateMateriel = () => {
    const Materiel = {
      design: design.current.value,
      etat: etat.current.value,
      quantite: quantite.current.value,
    };
    fetch(`${domain()}/api/materiels/${id}/update`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Materiel),
    })
      .then((res) => res.json())
      .then((resJson) => {
        alert("Modification de produit reussi");
        Alert.alert("Modification de produit reussi");
        props.navigation.navigate("Liste");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <InDesignUp value={olddesign} state={ design } style={styles.MaterielStackedLabelTextbox1}></InDesignUp>
      <InPrixUp value={oldetat} state={ etat } style={styles.MaterielStackedLabelTextbox1}></InPrixUp>
      <InQuantiteUp value={oldquantite} state={ quantite } style={styles.MaterielStackedLabelTextbox2}></InQuantiteUp>
      <View style={styles.MaterielButtonPurpleRow}>
        <BtnSaveUp onPress={updateMateriel} style={styles.MaterielButtonPurple}></BtnSaveUp>
        <BtnCancelUp
          style={styles.MaterielButtonPink}
          onPress={() => props.navigation.navigate("Liste")}
        ></BtnCancelUp>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MaterielButtonPurple: {
    height: 36,
    width: 132,
  },
  MaterielButtonPink: {
    height: 36,
    width: 140,
    marginLeft: 18,
  },
  MaterielButtonPurpleRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 39,
    marginRight: 52,
  },
  MaterielStackedLabelTextbox1: {
    height: 60,
    width: 345,
    marginTop: 76,
    marginLeft: 10,
  },
  MaterielStackedLabelTextbox2: {
    height: 60,
    width: 345,
    marginTop: 62,
    marginLeft: 10,
  },
});

export default UpdateMateriel;
