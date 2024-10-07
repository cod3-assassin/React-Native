import { FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../Data/dummy-data";
import CategoriesGridStyle from "../components/CategoriesGridStyle";

export default function CategoryScreen({ navigation }) {
  function renderCategoriesItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoriesGridStyle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoriesItem.bind()}
      numColumns={2}
    />
  );
}
