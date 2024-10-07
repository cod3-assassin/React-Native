import { StyleSheet, Text } from "react-native";
import React from "react";
import Colors from "./utils/colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instruction, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instruction: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
