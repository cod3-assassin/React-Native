import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "./utils/colors";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styels.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styels.buttonInnerContainer, styels.pressed]
            : styels.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styels.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styels = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
