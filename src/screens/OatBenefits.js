import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Appbar,
  Card,
  Paragraph,
  Divider,
} from "react-native-paper";
import * as images from "../assets/images";
import { Space } from "../components";

const OatBenefits = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={"large"} animating />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title="Yulaf Ezmesinin Faydaları" />
      </Appbar>
      <ScrollView contentContainerStyle={styles.content}>
        <Space />
        <Card>
          <Card.Cover source={images.rolledOatsBg} />
          <Card.Title title="Yulaf Ezmesi" />
          <Card.Content>
            <Paragraph>
              Yulaf ezmesinin içeriğinde potasyum, kalsiyum, demir gibi birçok
              yararlı mineral, E vitamini ve B grubu vitaminleri başta olmak
              üzere birçok yararlı madde ve besin lifi bulunuyor. Tüm bu yararlı
              maddeler sayesinde yulaf ezmesi, sağlıklı beslenmek isteyenler
              için en çok önerilen gıdalardan birine dönüşüyor.
            </Paragraph>
            <Space />
            <Divider />
            <Space />
            <Paragraph>
              Yine içinde bulunan beta glukan sayesinde yulaf ezmesi düzenli
              kullanımda bağışıklık sisteminin güçlenmesine destek oluyor,
              vücudu çeşitli hastalıklardan koruyor.
            </Paragraph>
            <Space />
            <Divider />
            <Space />
            <Paragraph>
              İçeriğindeki besin lifi ve beta glukan sayesinde sindirim
              sisteminin sağlıkla çalışmasına destek oluyor.
            </Paragraph>
            <Space />
            <Divider />
            <Space />
            <Paragraph>
              Özellikle kabızlık sorunu yaşayanların bu sorundan kısa sürede
              kurtulmasına yardım ediyor.
            </Paragraph>
            <Space />
            <Divider />
            <Space />
            <Paragraph>
              Antioksidan özellikler göstermesinin de etkisiyle yulaf ezmesi kan
              şekerinin dengelenmesine destek oluyor.
            </Paragraph>
            <Space />
            <Divider />
            <Space />
            <Paragraph>
              Doğru şekilde hazırlanıp tüketildiğinde (rafine şeker ilavesiz)
              tip 2 diyabet rahatsızlığı olanların da güvenle tüketebileceği
              söyleniyor.
            </Paragraph>
            <Space />
            <Divider />
            <Space />
            <Paragraph>
              Tıpkı kan şekeri gibi kolesterolün de dengelenmesinde önemli
              roller üstlenebiliyor.
            </Paragraph>
            <Space />
            <Divider />
            <Space />
            <Paragraph>
              Düşük glisemik indeksli olduğundan yulaf ezmesi vücuda uzun süre
              enerji veriyor, zinde hissetmeye yardımcı oluyor.
            </Paragraph>
            <Space />
            <Divider />
            <Space />
            <Paragraph>
              Hem doyurucu olduğu hem de tokluk hissini uzun süre sağladığı için
              diyet yapanlar, sağlıklı beslenmeye dikkat edenler tarafından da
              sıkça tercih ediliyor.
            </Paragraph>
            <Space />
            <Divider />
            <Space />
            <Paragraph>
              Hem tok tuttuğu hem de içeriğinde bolca besin lifi bulunduğu için
              kilo verme sürecini hızlandırıyor.
            </Paragraph>
            <Space />
            <Divider />
            <Space />
            <Paragraph>
              Antioksidan özellikleri sayesinde sinir sisteminin de sağlıkla
              çalışmasına destek olan yulaf ezmesi, sebepsiz stres, sinir,
              endişe, hatta depresyondan koruyucu bir etki oluşturuyor.
            </Paragraph>
            <Space />
            <Divider />
            <Space />
            <Paragraph>
              Strese bağlı uykusuzluk sorununa da çözüm olduğu biliniyor.
            </Paragraph>
            <Space />
          </Card.Content>
        </Card>
        <Space h="28" />
      </ScrollView>
    </View>
  );
};

export default OatBenefits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    marginHorizontal: 8,
  },
});
