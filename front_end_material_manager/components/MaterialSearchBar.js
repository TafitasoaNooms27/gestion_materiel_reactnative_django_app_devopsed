import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import MaterielCommunityIconsIcon from "react-native-vector-icons/MaterielCommunityIcons";

function MaterielSearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <View style={styles.leftIconButtonRow}>
          <TouchableOpacity style={styles.leftIconButton}>
            <MaterielCommunityIconsIcon
              name="folder-search-outline"
              style={styles.leftIcon}
            ></MaterielCommunityIconsIcon>
          </TouchableOpacity>
          <TextInput placeholder="Search" style={styles.inputStyle}></TextInput>
        </View>
        <View style={styles.leftIconButtonRowFiller}></View>
        <TouchableOpacity style={styles.rightIconButton}>
          <MaterielCommunityIconsIcon
            name="close"
            style={styles.rightIcon}
          ></MaterielCommunityIconsIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  rect1: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 2,
    flex: 1,
    marginBottom: 4,
    marginTop: 4,
    marginLeft: 4,
    marginRight: 4
  },
  leftIconButton: {
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6
  },
  inputStyle: {
    height: 48,
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    width: 257,
    lineHeight: 16,
    marginLeft: 43,
    marginTop: 4
  },
  leftIconButtonRow: {
    height: 52,
    flexDirection: "row",
    marginLeft: 7
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconButton: {
    padding: 11,
    alignItems: "center",
    marginRight: 5,
    marginTop: 5
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6
  }
});

export default MaterielSearchBar;
