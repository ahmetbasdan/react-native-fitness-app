import React from "react";
import { ImageSourcePropType, View, StyleSheet } from "react-native";
import { Card, Colors, Title, TouchableRipple, Text } from "react-native-paper";
import * as images from "../assets/images";

interface IProps {
  title: string;
  bg?: ImageSourcePropType;
  onPress?: () => void;
  rightText?: string;
}

const BORDER_RADIUS = 12;

const SportParentCard: React.FC<IProps> = ({
  title = "Title",
  bg = images.fitnessBg,
  onPress,
  rightText,
}) => {
  return (
    <TouchableRipple onPress={onPress}>
      <>
        <Card.Cover source={bg} style={styles.cardCover} />
        <View style={styles.titleContainer}>
          <Title style={styles.title}>{title} </Title>
        </View>
        {rightText && <Text style={styles.rightText}>{rightText}</Text>}
      </>
    </TouchableRipple>
  );
};

export default SportParentCard;

const styles = StyleSheet.create({
  cardCover: {
    borderRadius: BORDER_RADIUS,
  },
  titleContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    width: "100%",
    paddingVertical: 8,
    borderBottomEndRadius: BORDER_RADIUS,
    borderBottomStartRadius: BORDER_RADIUS,
  },
  title: {
    color: Colors.white,
    paddingLeft: 16,
  },
  rightText: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: Colors.pink500,
    color: Colors.white,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderTopRightRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    fontSize: 12,
  },
});
