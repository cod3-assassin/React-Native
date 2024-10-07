import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function CategoriesGridStyle({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttonStyle,
          pressed ? styles.buttonPresses : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    flex: 1,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonPresses: {
    opacity: 0.5,
  },
});
