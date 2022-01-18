import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Appbar } from "react-native-paper";
import {
  barbellSquatGif,
  butterflyGif,
  chestPressGif,
  dumbbelCurlsGif,
  latPullDownGif,
  lowRowGif,
  pushDownGif,
  scotCurlGif,
  shoulderPressGif,
} from "../assets/gifs";
import {
  backBg,
  bicepsBg,
  chestBg,
  legsBg,
  shoulderBg,
  tricepsBg,
} from "../assets/images";
import { Space, SporMovementCard } from "../components";

const FitnessFullBody = () => {
  return (
    <>
      <Appbar>
        <Appbar.Content title="Tüm Vücut Antreman" />
      </Appbar>
      <ScrollView>
        <Space />
        <SporMovementCard
          title="Chest Press"
          subTitle="3x 12-10-8"
          gif={chestPressGif}
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
          title="Shoulder Press"
          subTitle="3x 12-10-8"
          gif={shoulderPressGif}
          bg={shoulderBg}
        />
        <Space h={32} />
        <SporMovementCard
          title="Lat Pulldown"
          subTitle="3x 12-10-8"
          gif={latPullDownGif}
          bg={backBg}
        />
        <Space h={32} />
        <SporMovementCard
          title="Low Row"
          subTitle="3x 12-10-8"
          gif={lowRowGif}
          bg={backBg}
        />
        <Space h={32} />
        <SporMovementCard
          title="Dumbbel Curls"
          subTitle="3x 12-10-8"
          gif={dumbbelCurlsGif}
          bg={bicepsBg}
        />
        <Space h={32} />
        <SporMovementCard
          title="Scot Curls"
          subTitle="3x 12-10-8"
          gif={scotCurlGif}
          bg={bicepsBg}
        />
        <Space h={32} />
        <SporMovementCard
          title="Pushdown"
          subTitle="3x 12-10-8"
          gif={pushDownGif}
          bg={tricepsBg}
        />
        <Space h={32} />
        <SporMovementCard
          title="Squat"
          subTitle="3x 12-10-8"
          gif={barbellSquatGif}
          bg={legsBg}
        />
        <Space h={32} />
      </ScrollView>
    </>
  );
};

export default FitnessFullBody;
