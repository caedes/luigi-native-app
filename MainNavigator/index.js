import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import * as React from "react";

import BasketScreen from "../BasketScreen";
import PizzasNavigator from "../PizzasNavigator";
import SettingsScreen from "../SettingsScreen";

const Tab = createBottomTabNavigator();

const routes = [
  {
    name: "Home",
    component: PizzasNavigator,
    icon: "home",
  },
  {
    name: "Basket",
    component: BasketScreen,
    icon: "shopping-cart",
  },
  {
    name: "Settings",
    component: SettingsScreen,
    icon: "settings",
  },
];

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      {routes.map(({ name, component, icon }) => (
        <Tab.Screen
          name={name}
          key={name}
          component={component}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name={icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
