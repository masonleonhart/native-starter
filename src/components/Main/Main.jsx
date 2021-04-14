import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";

const Main = () => {

  const dispatch = useDispatch();

  dispatch({ type: "FETCH_LIST" })

  // Renders our Main component

  return (
    <View style={styles.container}>

    </View>
  );
};

// Styles for the Main component

const styles = StyleSheet.create({

});

export default Main;
