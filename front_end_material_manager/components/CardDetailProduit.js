import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterielCommunityIcons";
import MaterielButtonWithShadow from "./MaterielButtonWithShadow";

function CardDetailMateriel(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/cardImage4.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.designation}>Designation</Text>
        <Text style={styles.prixUnitaire}>Etat</Text>
      </TouchableOpacity>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}>
          <Text style={styles.modifier}>MODIFIER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.supprimer}>SUPPRIMER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton3}>
          <Icon name="chevron-up" style={styles.iconStyle}></Icon>
        </TouchableOpacity>
      </View>
      <MaterielButtonWithShadow
        style={styles.MaterielButtonWithShadow}
      ></MaterielButtonWithShadow>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    flex: 1,
    minHeight: 210
  },
  button: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    height: 68
  },
  designation: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  prixUnitaire: {
    fontSize: 14,
    color: "rgba(12,237,241,1)",
    lineHeight: 16,
    opacity: 0.5
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    padding: 8,
    height: 36,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.14,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(7,231,243,1)"
  },
  modifier: {
    fontSize: 14,
    color: "rgba(7,253,249,1)",
    opacity: 0.9
  },
  actionButton2: {
    padding: 8,
    height: 36,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.17,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "rgba(251,9,9,1)"
  },
  supprimer: {
    fontSize: 14,
    color: "rgba(253,10,10,1)",
    opacity: 0.9
  },
  actionButton3: {
    padding: 8,
    height: 36,
    position: "absolute",
    right: 8,
    bottom: 12
  },
  iconStyle: {
    fontSize: 24,
    color: "#000",
    opacity: 0.7
  },
  MaterielButtonWithShadow: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 241,
    top: 250
  }
});

export default CardDetailMateriel;
