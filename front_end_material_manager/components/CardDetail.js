import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterielCommunityIcons";
import BtnDtlUpdate from "./BtnDtlUpdate";
import BtdDtlDelete from "./BtdDtlDelete";

function CardDetail(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/cardImage.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}>
          <Text style={styles.actionText1}>ACTION 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton3}>
          <Icon name="chevron-up" style={styles.iconStyle}></Icon>
        </TouchableOpacity>
      </View>
      <BtnDtlUpdate style={styles.MaterielButtonPrimary}></BtnDtlUpdate>
      <BtdDtlDelete style={styles.MaterielButtonDanger}></BtdDtlDelete>
      <Text style={styles.designation}>Designation</Text>
      <Text style={styles.prixUnitaire}>Etat:</Text>
      <Text style={styles.quantite}>Quantite</Text>
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
    minHeight: 210,
    left: 0,
    width: 357,
    top: 0,
    height: 235
  },
  actionBody: {
    padding: 8,
    flexDirection: "row"
  },
  actionButton1: {
    padding: 8,
    height: 36
  },
  actionText1: {
    fontSize: 14,
    color: "#000",
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
  MaterielButtonPrimary: {
    height: 36,
    width: 110,
    position: "absolute",
    left: 11,
    top: 304
  },
  MaterielButtonDanger: {
    height: 36,
    width: 105,
    position: "absolute",
    left: 143,
    top: 304
  },
  designation: {
    top: 190,
    left: 11,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 25
  },
  prixUnitaire: {
    top: 258,
    left: 22,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  quantite: {
    top: 260,
    left: 215,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  }
});

export default CardDetail;
