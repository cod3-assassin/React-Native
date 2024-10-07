import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enterdGoalText, setEnterGaolText] = useState("");

  function goalInputHandler(enteredText) {
    setEnterGaolText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enterdGoalText);
    setEnterGaolText("");
  }
  console.log("Goal iNput comp renderd ");
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../../assets/goal.png")} />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="Your Course Goal !"
          value={enterdGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
          </View>
          <View style={styles.button}>
            <Button title="Cancle" onPress={props.onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",

    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "100",
    marginHorizontal: 8,
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
  },
});
