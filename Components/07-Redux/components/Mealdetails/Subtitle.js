import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subInnerContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subInnerContainer: {
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});
