import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import React, { useRef } from "react";
import {
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  TextInput,
  View,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Style from "../assets/styles";

const AddNote = ({ navigation, ...props }) => {
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
              multiline={true}
              value={props.note}
              onChangeText={(text) => props.setNote(text)}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (!props.note || (props.note && props.note.trim() === "")) {
                  Alert.alert("Please type something");
                } else {
                  props.handleNote();
                  navigation.navigate("Notes");
                }
              }}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  addNoteContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    padding: 20,
    paddingTop: 20,
    width: "100%",
    fontSize: 19,
    color: "black",
    fontWeight: "600",
    opacity: 0.8,
    shadowColor: Style.color,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: Style.color,
    borderRadius: 5,
    height: 280,
  },
  button: {
    backgroundColor: Style.color,
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: 8,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 14,
  },
});

export default AddNote;
