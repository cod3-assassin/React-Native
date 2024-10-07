import { StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList/MealList";
//import { FavouriteContext } from "../store/Context/favourite-context";
import { useContext } from "react";
import { MEALS } from "../Data/dummy-data";
import { useSelector } from "react-redux";

function FavouriteScreen() {
  const favoriteMealsIds = useSelector((state) => state.favoriteMeal.ids);

  const FavMeals = MEALS.filter((meal) => favoriteMealsIds.includes(meal.id));

  if (FavMeals.length === 0) {
    return (
      <View style={styles.rootConatiner}>
        <Text style={styles.text}>You Have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealList items={FavMeals} />;
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootConatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
