import "react-native-gesture-handler";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "react-native-elements";
import * as React from "react";

import MainNavigator from "./MainNavigator";
import theme from "./theme";

LogBox.ignoreLogs(["Setting a timer"]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <MainNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </ThemeProvider>
  );
}
