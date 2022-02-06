import { View, StyleSheet } from "react-native";
import React from "react";
import Space from "./Space";
import { Avatar, Card, Divider, Paragraph, Title } from "react-native-paper";
import * as images from "../assets/images";

interface IProps {
  image: NodeRequire;
  title: string;
  paragraph: string;
}

const NutritionDetailCard: React.FC<IProps> = ({
  title,
  image = images.redMeat,
  paragraph,
}) => {
  return (
    <>
      <Space />
      <Card>
        <Card.Content>
          <View style={styles.nutritionCardHeader}>
            <Avatar.Image source={image} />
            <Title style={styles.title}>{title}</Title>
          </View>

          <Space h="12" />
          <Divider />
          <Space h="12" />
          <Paragraph>{paragraph}</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
};

export default NutritionDetailCard;

const styles = StyleSheet.create({
  nutritionCardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 8,
  },
});
