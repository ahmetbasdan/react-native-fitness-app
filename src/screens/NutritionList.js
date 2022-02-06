import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { Space, BannerCard } from "../components";
import * as images from "../assets/images";

const NutritionList = () => {
  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Sağlıklı Beslenme" />
      </Appbar>
      <ScrollView contentContainerStyle={styles.content}>
        <Space />
        <BannerCard
          bg={images.proteinSourcesBg}
          title="Protein Kaynakları"
        />
        <Space />
        <BannerCard
          bg={images.vegetableProteinsSourcesBg}
          title="Bitkisel Protein Kaynakları"
        />
        <Space />
        <BannerCard
          bg={images.qualtyCarbohydrateBg}
          title="Kaliteli Karbonhidratlar"
        />
        <Space />
        <BannerCard
          bg={images.rolledOatsBg}
          title="Yulaf Ezmesinin Faydaları"
        />
        <Space h="24" />
      </ScrollView>
    </View>
  );
};

export default NutritionList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 8,
  },
});
