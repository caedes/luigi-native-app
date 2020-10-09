import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../HomeScreen";
import PizzaScreen from "../PizzaScreen";

const Stack = createStackNavigator();

export default function PizzasNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Luigi - Pizzas" component={HomeScreen} />
      <Stack.Screen name="Luigi - Pizza" component={PizzaScreen} />
    </Stack.Navigator>
  );
}
