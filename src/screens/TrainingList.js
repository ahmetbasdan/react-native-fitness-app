import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { Space, BannerCard, Container } from "../components";
import * as images from "../assets/images";
import { useNavigation } from "@react-navigation/native";
import useSportCardsData from "../data/useSportCardsData";
import { useDispatch } from "react-redux";
import { setThemeToggle } from "../redux/actions/themeAction";
import i18n from "i18n-js";

const TrainingList = () => {
  const navigation = useNavigation();
  const { fullBodyCardData, chestBackBicepsData, shoulderTricepsLegsData } =
    useSportCardsData();
  const dispatch = useDispatch();

  const themeToggle = () => dispatch(setThemeToggle());

  return (
    <Container>
      <Appbar>
        <Appbar.Content title={i18n.t("training.title")} />
        <Appbar.Action icon="brightness-6" onPress={themeToggle} />
      </Appbar>
      <ScrollView contentContainerStyle={styles.content}>
        <Space />
        <BannerCard
          bg={images.fullBodyBg}
          title={i18n.t("training.fullBody.title")}
          onPress={() =>
            navigation.navigate("trainingDetail", {
              data: fullBodyCardData,
              title: i18n.t("training.fullBody.title"),
            })
          }
          rightText={i18n.t("training.fullBody.level")}
        />
        <Space />
        <BannerCard
          bg={images.chestBackBicepsBg}
          title={i18n.t("training.chestBicepsBack.title")}
          onPress={() =>
            navigation.navigate("trainingDetail", {
              data: chestBackBicepsData,
              title: i18n.t("training.chestBicepsBack.title"),
            })
          }
          rightText={i18n.t("training.chestBicepsBack.level")}
        />
        <Space />
        <BannerCard
          bg={images.shoulderTricepsLegsBg}
          title={i18n.t("training.shoulderTricepsLegs.title")}
          onPress={() =>
            navigation.navigate("trainingDetail", {
              data: shoulderTricepsLegsData,
              title: i18n.t("training.shoulderTricepsLegs.title"),
            })
          }
          rightText={i18n.t("training.shoulderTricepsLegs.level")}
        />
        <Space h="24" />
      </ScrollView>
    </Container>
  );
};

export default TrainingList;

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 8,
  },
});
