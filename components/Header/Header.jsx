import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Native To Do List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "blue",
    height: "12%"
  },
  headerText: {
    color: "white",
    margin: "2%",
    fontSize: 35
  }
});

export default Header;
