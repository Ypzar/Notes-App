import React, { useState } from "react";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import {
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  View,
  TouchableOpacity,
  Platform,
  TextInput,
} from "react-native";
import { styles } from "./AddNote";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditNote = ({ route, navigation, ...props }) => {
  const { i, n } = route.params;
  const [newEdit, setNewEdit] = useState(n);

  function editNote() {
    let edited = [...props.notes];
    edited[i] = newEdit;
    props.setNotes(edited);

    navigation.navigate("Notes");

    AsyncStorage.setItem("storedNotes", JSON.stringify(edited))
      .then(() => {
        props.setNotes(edited);
      })
      .catch((error) => console.log(error));
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        // behavior="padding"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ padding: 20, justifyContent: "space-around" }}>
            <TextInput
              style={styles.input}
              placeholder="Type Here..."
              value={newEdit.toString()}
              onChangeText={(text) => setNewEdit(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => editNote()}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default EditNote;
