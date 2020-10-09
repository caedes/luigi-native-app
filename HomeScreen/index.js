import { ActivityIndicator, FlatList, Text, View } from "react-native";
import * as React from "react";

import PizzaCard from "../PizzaCard";
import usePizzas from "../pizzas/usePizzas";

const renderPizza = ({ item }) => <PizzaCard {...item} />;

const itemId = ({ id }) => String(id);

export default function HomeScreen() {
  const { isLoading, error, data } = usePizzas();

  if (isLoading) return <ActivityIndicator />;

  if (error) return <Text>{error}</Text>;

  return (
    <View style={{ flex: 1 }}>
      <FlatList data={data} renderItem={renderPizza} keyExtractor={itemId} />
    </View>
  );
}
