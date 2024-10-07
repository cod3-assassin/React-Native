import { Button, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import CategoryScreen from "./screens/CategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsScreen from "./screens/MealsScreen";
import MealsDeatilsScreen from "./screens/MealsDeatilsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteScreen from "./screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  function DraweNavigation() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "#fff",
          sceneContainerStyle: { backgroundColor: "#3f2f25" },
          drawerContentStyle: {
            backgroundColor: "#3f2f25",
          },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#e4baa1",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoryScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favourites"
          component={FavouriteScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "#fff",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DraweNavigation}
            options={{
              title: "Meals Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsScreen}

            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen
            name="MealDeatils"
            component={MealsDeatilsScreen}
            options={{
              title: "About the Meal",
            }}
            // options={{
            //   headerRight: () => {
            //     return <Button title="Tap Me!" />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
