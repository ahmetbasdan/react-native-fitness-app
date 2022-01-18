import React from "react";
import { ScrollView } from "react-native";
import SporMovementCard from "../SporMovementCard";
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
      <SporMovementCard
        title="Bench Press"
        subTitle="4x 12-10-8-6"
        gif={benchPressGif}
      />
      <SporMovementCard
        title="Butterfly"
        subTitle="3x 12-10-8"
        gif={butterflyGif}
      />
      <SporMovementCard
        title="Inline Bench Press"
        subTitle="4x 12-10-8-6"
        gif={inlineBenchGif}
      />
      <SporMovementCard
        title="Dumbbell Pull Row"
        subTitle="3x 12-10-8"
        gif={dumbellPulloeverGif}
      />
      <SporMovementCard
        title="Lat Pull Down"
        subTitle="4x 12-10-8-6"
        gif={latPullDownGif}
      />
      <SporMovementCard
        title="Dumbbell Row"
        subTitle="3x 12-10-8"
        gif={dumbbellRowGif}
      />
      <SporMovementCard
        title="Z Bar Barbell Curl"
        subTitle="4x 12-10-8-6"
        gif={zBarBarbellCurlGif}
      />
      <SporMovementCard
        title="Incline Dumbbell Curl"
        subTitle="3x 12-10-8"
        gif={inclineDumbbellCurlGif}
      />
      <SporMovementCard
        title="Scout Curl"
        subTitle="3x 12-10-8"
        gif={scotCurlGif}
      />
      <SporMovementCard title="Wrist" subTitle="2x 20-15" gif={wristGif} />
    </ScrollView>
  );
};

export default ChestBackBiceps;
