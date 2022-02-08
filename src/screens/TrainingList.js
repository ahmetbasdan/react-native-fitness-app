import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { Space, BannerCard, Container } from "../components";
import * as images from "../assets/images";
import { useNavigation } from "@react-navigation/native";
import useSportCardsData from "../data/useSportCardsData";
import { useDispatch } from "react-redux";
import { setThemeToggle } from "../redux/actions/themeAction";

const TrainingList = () => {
  const navigation = useNavigation();
  const { fullBodyCardData, chestBackBicepsData, shoulderTricepsLegsData } =
    useSportCardsData();
  const dispatch = useDispatch();

  const themeToggle = () => dispatch(setThemeToggle());

  return (
    <Container>
      <Appbar>
        <Appbar.Content title="Antreman Listesi" />
        <Appbar.Action icon="brightness-6" onPress={themeToggle} />
      </Appbar>
      <ScrollView contentContainerStyle={styles.content}>
        <Space />
        <BannerCard
          bg={images.fullBodyBg}
          title="Tüm Vücut Başlangıç Antremanı"
          onPress={() =>
            navigation.navigate("trainingDetail", {
              data: fullBodyCardData,
              title: "Tüm Vücut Başlangıç Antremanı",
            })
          }
          rightText="Seviye 1"
        />
        <Space />
        <BannerCard
          bg={images.chestBackBicepsBg}
          title="Göğüs - Ön Kol - Sırt Antremanı"
          onPress={() =>
            navigation.navigate("trainingDetail", {
              data: chestBackBicepsData,
              title: "Göğüs - Ön Kol - Sırt Antremanı",
            })
          }
          rightText="Seviye 2"
        />
        <Space />
        <BannerCard
          bg={images.shoulderTricepsLegsBg}
          title="Omuz - Arka Kol - Bacak Antremanı"
          onPress={() =>
            navigation.navigate("trainingDetail", {
              data: shoulderTricepsLegsData,
              title: "Omuz - Arka Kol - Bacak Antremanı",
            })
          }
          rightText="Seviye 2"
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
