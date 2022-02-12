import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Appbar } from "react-native-paper";
import * as images from "../assets/images";
import { Container, NutritionDetailCard, Space } from "../components";
import i18n from "i18n-js";

const QulityCarbohydrate = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <Container style={styles.loadingContainer}>
        <ActivityIndicator size={"large"} animating />
      </Container>
    );
  }

  return (
    <Container>
      <Appbar>
        <Appbar.Content title={i18n.t("nutrition.qualityCarbohydrate.title")} />
      </Appbar>
      <ScrollView contentContainerStyle={styles.content}>
        <NutritionDetailCard
          title="Bezelye"
          image={images.peas}
          paragraph="Yarım su bardağı bezelye vücudunun günlük çinko ihtiyacının yüzde on ikisini karşılıyor. Bunun yanı sıra tüketildiğinde salgılanmasını arttırdığı leptin minerali sayesinde beynini uyararak sana kendini daha hızlı bir şekilde tok hissettiriyor."
        />
        <NutritionDetailCard
          title="Tam Buğdaylı Makarna"
          image={images.wheatPasta}
          paragraph="Kilo almadan makarna yemenin sırrı 100 - 200 gram arası bir miktarda ve tüm bir öğün yerine, öğünlerinin yanında yardımcı besin olarak tüketmen."
        />
        <NutritionDetailCard
          title="Fasulye"
          image={images.bean}
          paragraph="Fasulyenin her çeşidi farklı miktarlarda lif içeriyor. Aynı zamanda iyi bir protein ve demir deposu. Fasulye, seni tok tutacak besleyici bir karbonhidrat seçeneği."
        />
        <NutritionDetailCard
          title="Yulaf"
          image={images.oat}
          paragraph="Yulaf çözünebilir bir lif kaynağı. Bu özelliği sayesinde normalden daha çabuk tok hissettiriyor. Yapılan araştırmalar beslenme rutinine çözünebilir lif içeren besinleri eklemeni öneriyor."
        />
        <NutritionDetailCard
          title="Kinoa"
          image={images.kiona}
          paragraph="Kinoa vücudunun ihtiyaç duyduğu, kas oluşumuna yardımcı olan 9 farklı aminoasite ve doymuş yağlara sahip bir besin. Yemeklerinin yanında yan öğün olarak tükettiğinde seni tok tutmaya da yarayacak."
        />
        <Space h="28" />
      </ScrollView>
    </Container>
  );
};

export default QulityCarbohydrate;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginHorizontal: 8,
  },
});
