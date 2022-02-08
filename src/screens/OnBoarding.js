import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useDispatch } from "react-redux";
import * as images from "../assets/images";
import { setHideOnboarding } from "../redux/actions/onBoardingAction";

const { width } = Dimensions.get("window");
const OnBoarding = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onDone = () => {
    dispatch(setHideOnboarding());
    navigation.navigate("dashboard");
  };

  return (
    <Onboarding
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={images.onboarding1} style={styles.image} />,
          title: "Fitness Rehberi",
          subtitle:
            "Fitness'a yeni başlayanlar için rehber niteliğindeki bilgileri ve programları öğrenebilirsin.",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={images.onboarding2} style={styles.image} />,
          title: "Antremanını Kaydet",
          subtitle:
            "Son yaptığın antreman bilgilerini not alarak daha düzenli çalış.",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={images.onboarding3} style={styles.image} />,
          title: "Beslenme Rehberi",
          subtitle:
            "Protein ve karbonhidrat içeren besinler hakkında temel bilgi sahibi ol.",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={images.onboarding4} style={styles.image} />,
          title: "Hazırsan Başlayalım",
          subtitle: `Seviye 1 antremandan başlayabilirsin.`,
        },
      ]}
      imageContainerStyles={styles.imageContainerStyles}
      titleStyles={styles.titleStyles}
      subTitleStyles={styles.subTitleStyles}
      nextLabel="İleri"
      skipLabel="Geri"
      onDone={onDone}
    />
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: width,
  },
  imageContainerStyles: {
    paddingBottom: 0,
    padding: 0,
    margin: 0,
    top: -50,
  },
  titleStyles: { top: -80 },
  subTitleStyles: { top: -80 },
});
