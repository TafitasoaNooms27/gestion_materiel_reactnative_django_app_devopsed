import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ButtonDelete from "./ButtonDelete";
import ButtonEdit from "./ButtonEdit";

function Item(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardBody}>
        <View style={styles.bodyContent}>
          <Text style={styles.titleStyle}>{props.data.design}</Text>
          <Text style={styles.subtitleStyle}>
            {props.data.etat}
            <Text style={styles.quantiteStyle}>(Quantite: {props.data.quantite})</Text>
          </Text>
        </View>
        <Image
          source={require("../assets/images/cardImage3.png")}
          style={styles.cardItemImagePlace}
        ></Image>
      </View>
      <ButtonDelete onPress={props.delete} style={styles.MaterielButtonDanger}></ButtonDelete>
      <ButtonEdit
        style={styles.MaterielButtonPrimary}
        onPress={props.navigateToUpdate}
      ></ButtonEdit>
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
    shadowColor: "rgba(10,250,123,1)",
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
    flexDirection: "row",
  },
  cardBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    left: 1,
    width: 357,
    top: -1,
    height: 112,
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    flex: 1,
  },
  titleStyle: {
    fontSize: 18,
    color: "#000",
    paddingBottom: 12,
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.7,
  },
  quantiteStyle: {
    fontSize: 16,
    color: "#0f0",
    lineHeight: 16,
    opacity: 0.9,
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    height: 80,
    width: 80,
    margin: 16,
  },
  MaterielButtonDanger: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 117,
    top: 75,
  },
  MaterielButtonPrimary: {
    height: 36,
    width: 100,
    position: "absolute",
    left: 14,
    top: 75,
  },
});

export default Item;
