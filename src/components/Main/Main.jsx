import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { TextInput, Button, Text } from "react-native-paper";

import {
  StyleSheet,
  // Text,
  View,
  // TextInput,
  // Button,
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
        mode="outlined"
        placeholder="placeholder"
        value={newEntryContent}
        onChangeText={(text) => setNewEntryContent(text)}
      />
      <View>
        <Button onPress={handleNewEntrySubmit}>Submit</Button>
      </View>
      <ScrollView>
        <View style={styles.scrollViewHeader}>
          <Text>Content</Text>
          <Text>Date</Text>
        </View>
        <View style={styles.scrollViewBody}>
          {list.map((entry) => (
            <View key={entry.id} style={styles.scrollViewRow}>
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
    width: "100%",
    padding: 10,
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
