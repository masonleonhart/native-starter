import React from "react";
import { StyleSheet, Text } from "react-native";
import { Appbar } from "react-native-paper";

const Header = () => {
  // Renders our header component

  return (
    <Appbar.Header>
      <Text style={styles.headerText}>Native To Do List</Text>
    </Appbar.Header>
  );
};

// Styles for the header component

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "blue",
    height: "12%",
  },
  headerText: {
    color: "white",
    margin: "2%",
    fontSize: 35,
    textAlign: "center"
  },
});

export default Header;
