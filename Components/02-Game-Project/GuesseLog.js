import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Colors from "./utils/colors";
export default function GuesseLog({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent's Guess : {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBlockColor: Colors.primary400,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    width: "100%",
    elevation: 4,
  },
});
