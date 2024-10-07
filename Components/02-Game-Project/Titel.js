import { StyleSheet, Text } from "react-native";
import React from "react";

export default function Titel({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    fontWeight: "bold",
    maxWidth: "80%",
    width: 300,
  },
});
