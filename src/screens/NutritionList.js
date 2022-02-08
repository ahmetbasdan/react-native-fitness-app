import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { Space, BannerCard, Container } from "../components";
import * as images from "../assets/images";
import { useNavigation } from "@react-navigation/native";

const NutritionList = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Appbar>
        <Appbar.Content title="Sağlıklı Beslenme" />
      </Appbar>
      <ScrollView contentContainerStyle={styles.content}>
        <Space />
        <BannerCard
          bg={images.proteinSourcesBg}
          title="Protein Kaynakları"
          onPress={() => navigation.navigate("proteinSources")}
        />
        <Space />
        <BannerCard
          bg={images.qualtyCarbohydrateBg}
          title="Kaliteli Karbonhidratlar"
          onPress={() => navigation.navigate("qualityCarbohydrate")}
        />
        <Space />
        <BannerCard
          bg={images.rolledOatsBg}
          title="Yulaf Ezmesinin Faydaları"
          onPress={() => navigation.navigate("oatBenefits")}
        />
        <Space h="24" />
      </ScrollView>
    </Container>
  );
};

export default NutritionList;

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 8,
  },
});
