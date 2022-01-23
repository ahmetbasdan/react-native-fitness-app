import { ScrollView } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { SportParentCard } from "../components/dashboard";
import { Space } from "../components/toolbox";
import * as images from "../assets/images";

const Dashboard = () => {
  return (
    <>
      <Appbar>
        <Appbar.Content title="Fitness Program" />
      </Appbar>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 6 }}>
        <Space />
        <SportParentCard title="Full Body Antreman" bg={images.fullBodyBg} />
        <Space />
        <SportParentCard title="Chest Antreman" bg={images.chestBg} />
        <Space />
        <SportParentCard title="Legs Antreman" bg={images.legsBg} />
        <Space />
      </ScrollView>
    </>
  );
};

export default Dashboard;
