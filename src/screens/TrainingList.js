import { View, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { Space, BannerCard } from "../components";
import * as images from "../assets/images";
import { useNavigation } from "@react-navigation/native";
import useSportCardsData from "../data/useSportCardsData";

const TrainingList = () => {
  const navigation = useNavigation();
  const { fullBodyCardData, chestBackBicepsData, shoulderTricepsLegsData } =
    useSportCardsData();

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Antreman Listesi" />
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
    </View>
  );
};

export default TrainingList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 8,
  },
});
