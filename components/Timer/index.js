import React, {useEffect} from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

const Timer = () => {
  const store = useSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_LIST" });
  }, [])

  return (
    <View style={styles.container}>
      <Text>Timer Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Timer;
