import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

const Main = () => {
  const dispatch = useDispatch();
  const list = useSelector((store) => store.listReducer);
  const [newEntryContent, setNewEntryContent] = useState("");

  const handleNewEntrySubmit = () => {
    dispatch({ type: "ADD_LIST_ENTRY", payload: newEntryContent });

    setNewEntryContent("");
  };

  useEffect(() => {
    dispatch({ type: "FETCH_LIST" });
  }, []);

  // Renders our Main component

  return (
    <View style={styles.container}>
      <Text>Add an Entry</Text>
      <TextInput
        style={styles.input}
        placeholder="placeholder"
        value={newEntryContent}
        onChangeText={(text) => setNewEntryContent(text)}
      />
      <Button title="Submit" onPress={handleNewEntrySubmit} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollViewHeader}>
          <Text>Content</Text>
          <Text>Date</Text>
        </View>
        <View style={styles.scrollViewBody}>
          {list.map((entry) => (
            <View style={styles.scrollViewRow}>
              <Text>{entry.content}</Text>
              <Text>{moment(entry.timestamp).format("MM-DD-YYYY")}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

// Styles for the Main component

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  input: {
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3,
    minWidth: 100,
    margin: 10,
  },
  scrollView: {
    margin: 10,
    minWidth: "90%",
  },
  scrollViewHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollViewBody: {},
  scrollViewRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Main;
