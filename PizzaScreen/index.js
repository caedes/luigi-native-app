import * as React from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function PizzaScreen() {
  const { params } = useRoute();
  const { id } = params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{`Pizza: ${id}`}</Text>
    </View>
  );
}
