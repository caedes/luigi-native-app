import "react-native-gesture-handler";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "react-native-elements";
import * as React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import MainNavigator from "./MainNavigator";
import theme from "./theme";
import pizzas from "./pizzas";

LogBox.ignoreLogs(["Setting a timer"]);

const store = configureStore({
  reducer: pizzas,
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationContainer>
          <MainNavigator />
          <StatusBar style="auto" />
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}
