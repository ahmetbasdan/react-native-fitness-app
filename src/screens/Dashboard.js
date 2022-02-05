import { View, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { Space, SportParentCard } from "../components";
import * as images from "../assets/images";
import { useNavigation } from "@react-navigation/native";
import useSportCardsData from "../data/useSportCardsData";

const Dashboard = () => {
  const navigation = useNavigation();
  const { fullBodyCardData, chestBackBicepsData, shoulderTricepsLegsData } =
    useSportCardsData();

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Fitness Programı" />
      </Appbar>
      <ScrollView contentContainerStyle={styles.content}>
        <Space />
        <SportParentCard
          bg={images.fullBodyBg}
          title="Tüm Vücut Başlangıç Antreman"
          onPress={() =>
            navigation.navigate("sportsDetail", {
              data: fullBodyCardData,
              title: "FullBody Antreman",
            })
          }
        />
        <Space />
        <SportParentCard
          bg={images.chestBackBicepsBg}
          title="Göğüs - Ön Kol - Sırt Antreman"
          onPress={() =>
            navigation.navigate("sportsDetail", {
              data: chestBackBicepsData,
              title: "Göğüs - Ön Kol - Sırt Antreman",
            })
          }
        />
        <Space />
        <SportParentCard
          bg={images.shoulderTricepsLegsBg}
          title="Omuz - Arka Kol - Bacak Antreman"
          onPress={() =>
            navigation.navigate("sportsDetail", {
              data: shoulderTricepsLegsData,
              title: "Omuz - Arka Kol - Bacak Antreman",
            })
          }
        />
        <Space />
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 8,
  },
});
