import * as React from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { Card } from "react-native-elements";

import usePizzas from "../pizzas/usePizzas";

const renderPizza = ({ item: { title, image, description } }) => (
  <Card>
    <Card.Title>{title}</Card.Title>
    <Card.Image source={{ uri: image }} />
    <Card.Divider />
    <Text style={{ marginBottom: 10 }}>{description}</Text>
  </Card>
);

const itemId = ({ id }) => id;

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
