import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { MEALS } from "../Data/dummy-data";
import MealDeatils from "../components/MealDeatils";
import Subtitle from "../components/Mealdetails/Subtitle";
import List from "../components/Mealdetails/List";
import IconButton from "../components/IconButton";
import { FavouriteContext } from "../store/Context/favourite-context";

export default function MealsDeatilsScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavouriteContext);
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealsIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function chnageFavorateStatusHandler() {
    if (mealsIsFavorite) {
      favoriteMealsCtx.removeFavourite(mealId);
    } else {
      favoriteMealsCtx.addFavourite(mealId);
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealsIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={chnageFavorateStatusHandler}
          />
        );
      },
    });
  }, [navigation, chnageFavorateStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDeatils
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyel={styles.deatilText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Stpes</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  deatilText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
