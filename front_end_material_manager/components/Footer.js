import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function Footer(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <Text style={[styles.labelAbimes]}>
          ABIMES
        </Text>
        <Text
          style={[
            styles.minimal
          ]}
        >
          {props.data.abimes}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <Text style={[styles.labelMauvais]}>
          MAUVAIS
        </Text>
        <Text style={styles.total}>{props.data.mauvais}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper5}>
        <Text style={[styles.labelBon]}>
          BON
        </Text>
        <Text style={styles.maximal}>{props.data.bon}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper6}>
        <Text style={[styles.labelTotal]}>
          TOTAL
        </Text>
        <Text style={styles.maximal}>{props.data.total}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "space-between",
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  minimal: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 14,
    color: "#f00"
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  total: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 14,
    color: "#00f",
  },
  btnWrapper5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 49
  },
  btnWrapper6: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 49
  },
  maximal: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 14,
    color: "#0f0",
  },

});

export default Footer;
