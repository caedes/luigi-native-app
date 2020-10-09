import { capitalize } from "lodash";
import { Card } from "react-native-elements";
import { number, string } from "prop-types";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";

const gotoPizza = (navigation, id) => () =>
  navigation.navigate("Luigi - Pizza", { id });

export default function PizzaCard({ id, title, image }) {
  const navigation = useNavigation();

  return (
    <Pressable onPress={gotoPizza(navigation, id)}>
      <Card>
        <Card.Title>{capitalize(title)}</Card.Title>
        {image && <Card.Image source={{ uri: image }} />}
      </Card>
    </Pressable>
  );
}

PizzaCard.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  image: string,
};

PizzaCard.defaultProps = {
  image: null,
};
