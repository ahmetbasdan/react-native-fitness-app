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
import { backBg, bicepsBg, chestBg, wristBg } from "../../assets/images";
import Space from "../Space";

const ChestBackBiceps = () => {
  return (
    <ScrollView>
      <Space />
      <SporMovementCard
        title="Bench Press"
        subTitle="4x 12-10-8-6"
        gif={benchPressGif}
        bg={chestBg}
      />
      <Space h={32} />
      <SporMovementCard
        title="Butterfly"
        subTitle="3x 12-10-8"
        gif={butterflyGif}
        bg={chestBg}
      />
      <Space h={32} />
      <SporMovementCard
        title="Inline Bench Press"
        subTitle="4x 12-10-8-6"
        gif={inlineBenchGif}
        bg={chestBg}
      />
      <Space h={32} />
      <SporMovementCard
        title="Dumbbell Pull Row"
        subTitle="3x 12-10-8"
        gif={dumbellPulloeverGif}
        bg={chestBg}
      />
      <Space h={32} />
      <SporMovementCard
        title="Lat Pulldown"
        subTitle="4x 12-10-8-6"
        gif={latPullDownGif}
        bg={backBg}
      />
      <Space h={32} />
      <SporMovementCard
        title="Dumbbell Row"
        subTitle="3x 12-10-8"
        gif={dumbbellRowGif}
        bg={backBg}
      />
      <Space h={32} />
      <SporMovementCard
        title="Z Bar Barbell Curl"
        subTitle="4x 12-10-8-6"
        gif={zBarBarbellCurlGif}
        bg={bicepsBg}
      />
      <Space h={32} />
      <SporMovementCard
        title="Incline Dumbbell Curl"
        subTitle="3x 12-10-8"
        gif={inclineDumbbellCurlGif}
        bg={bicepsBg}
      />
      <Space h={32} />
      <SporMovementCard
        title="Scout Curl"
        subTitle="3x 12-10-8"
        gif={scotCurlGif}
        bg={bicepsBg}
      />
      <Space h={32} />
      <SporMovementCard
        title="Wrist"
        subTitle="2x 20-15"
        gif={wristGif}
        bg={wristBg}
      />
      <Space h={32} />
    </ScrollView>
  );
};

export default ChestBackBiceps;
