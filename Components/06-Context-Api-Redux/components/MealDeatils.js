import { View, Text, StyleSheet } from "react-native";

function MealDeatils({
  duration,
  complexity,
  affordability,
  style,
  textStyel,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyel]}>{duration}m</Text>
      <Text style={[styles.detailsItem, textStyel]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, textStyel]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDeatils;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
