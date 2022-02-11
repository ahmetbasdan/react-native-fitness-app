import { StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Appbar } from "react-native-paper";
import { Space, BannerCard, Container } from "../components";
import * as images from "../assets/images";
import { useNavigation } from "@react-navigation/native";
import i18n from "i18n-js";

const NutritionList = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Appbar>
        <Appbar.Content title={i18n.t("nutrition.title")} />
      </Appbar>
      <ScrollView contentContainerStyle={styles.content}>
        <Space />
        <BannerCard
          bg={images.proteinSourcesBg}
          title={i18n.t("nutrition.proteinSources.title")}
          onPress={() => navigation.navigate("proteinSources")}
        />
        <Space />
        <BannerCard
          bg={images.qualtyCarbohydrateBg}
          title={i18n.t("nutrition.qualityCarbohydrate.title")}
          onPress={() => navigation.navigate("qualityCarbohydrate")}
        />
        <Space />
        <BannerCard
          bg={images.rolledOatsBg}
          title={i18n.t("nutrition.oatBenefits.title")}
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
