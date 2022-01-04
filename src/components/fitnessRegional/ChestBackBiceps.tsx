import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import {
  benchPressGif,
  butterflyGif,
  dumbbellRowGif,
  dumbellPulloeverGif,
  inclineDumbbellCurlGif,
  inlineBenchGif,
  latPullDownGif,
  scotCurlGif,
  wristGif,
  zBarBarbellCurlGif,
} from "../../assets/gifs";

const ChestBackBiceps = () => {
  return (
    <ScrollView>
      <CustomCard title="Bench Press" gif={benchPressGif} />
      <CustomCard title="Butterfly" gif={butterflyGif} />
      <CustomCard title="Inline Bench Press" gif={inlineBenchGif} />
      <CustomCard title="Dumbbell Pull Row" gif={dumbellPulloeverGif} />
      <CustomCard title="Lat Pull Down" gif={latPullDownGif} />
      <CustomCard title="Dumbbell Row" gif={dumbbellRowGif} />
      <CustomCard title="Z Bar Barbell Curl" gif={zBarBarbellCurlGif} />
      <CustomCard title="Incline Dumbbell Curl" gif={inclineDumbbellCurlGif} />
      <CustomCard title="Scout Curl" gif={scotCurlGif} />
      <CustomCard title="Wrist" gif={wristGif} />
    </ScrollView>
  );
};

export default ChestBackBiceps;

interface ICustomCardProps {
  gif: any;
  title: string;
}
const CustomCard: React.FC<ICustomCardProps> = ({ gif, title }) => (
  <Card>
    <Card.Title title={title} />
    <Card.Content>
      <Card.Cover source={gif} />
    </Card.Content>
  </Card>
);
