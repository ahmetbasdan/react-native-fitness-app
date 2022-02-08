import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Appbar,
} from "react-native-paper";
import * as images from "../assets/images";
import { Container, NutritionDetailCard, Space } from "../components";

const ProteinSources = () => {
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
        <Appbar.Content title="Protein Kaynakları" />
      </Appbar>
      <ScrollView contentContainerStyle={styles.content}>
        <NutritionDetailCard
          title={"Yumurta"}
          image={images.egg}
          paragraph="Yumurta en sağlıklı ve en besleyici protein kaynaklarından biridir. Vücudun ihtiyacı olan; vitamin, mineral ve sağlıklı yağlardan zengindir. Yumurtanın protein içeriğinin yarısından fazlası beyaz kısmında bulunmaktadır. Yumurta sarısının yağ içeriği, beyazına göre daha yüksektir.

          Protein içeriği: Tüm yumurtadaki kalorilerin % 33'ünü proteinden gelmektedir. Büyük boy yumurta, ortalama 6 gram protein ve 78 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Ton Balığı"}
          image={images.tuna}
          paragraph="Popüler ve ulaşımı kolay olan tuna balığının; protein içeriği yüksek, yağ oranı düşüktür. Ayrıca, omega-3 içermektedir.

        Protein içeriği: Suda ton balığındaki kalorinin % 90’ı proteinden gelmektedir. 100 gram suda ton balığı, ortalama 21 gram protein ve 95 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Balık"}
          image={images.fish}
          paragraph="Balık: Sağlık açısından oldukça faydalı bir besindir. Ayrıca, bazı çeşitlerinin omega-3 içeriği oldukça yüksektir. Örnek olarak, somon balığının içeriğini inceleyecek olursak;

          Protein içeriği: Somon balığındaki kalorinin % 46’sı proteinden gelmektedir. 100 gram ızgara somon balığı, ortalama 26 gram protein ve 231 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Karides"}
          image={images.shrimp}
          paragraph="Karides: Selenyum ve B12 vitamini de dahil olmak üzere vücut için faydalı diğer besin maddelerinden zengin bir deniz ürünüdür. Balık gibi, karides de omega-3 içermektedir.

          Protein içeriği: Karidesteki kalorinin % 97’si proteinden gelmektedir. 100 gram karides, ortalama 24 gram protein ve 100 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Tavuk Göğsü"}
          image={images.chickenBreast}
          paragraph="Protein içeriği yüksek olan tavuk göğsü, derisiz tüketildiği takdirde düşük yağ içerikli, iyi bir protein kaynağı olmaktadır. Ayrıca, birçok farklı tarif ile çeşitli yemeklerde kullanılabilmektedir.

Protein içeriği: Tavuk göğsündeki kalorilerin % 75'ini proteinden gelmektedir. 100 gram ızgara tavuk göğsü, ortalama 30 gram protein ve 151 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Hindi Göğsü"}
          image={images.turkeyBreast}
          paragraph="Hindi göğsü: Birçok yönden tavuk göğsüne benzemektedir. Hindi göğsü de aynı tavuk göğsü gibi kalorisi ve yağ oranı düşük olan, iyi bir protein kaynağıdır.

Protein içeriği: Hindi göğsündeki kalorinin % 82’si proteinden gelmektedir. 100 gram ızgara yağsız hindi göğsü, ortalama 33 gram protein ve 147 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Yağsız Kırmızı Et"}
          image={images.redMeat}
          paragraph="Yağsız kırmızı et protein bakımından zengindir. Ayrıca, yüksek oranda demir, B12 vitamini ve yararlı birçok besin maddesi içermektedir.

Protein içeriği: Yağsız kırmızı etteki kalorinin % 53’ü proteinden gelmektedir. 100 gram ızgara yağsız kırmızı et, ortalama 30 gram protein ve 220 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Lor Peynir"}
          image={images.cheese}
          paragraph="Lor peyniri: kalsiyum, vitamin ve minerallerden zengin ve diğer peynirlere göre kolesterol oranı daha düşük olan bir peynir çeşididir.

Protein içeriği: Lor peynirdeki kalorilerin % 54’ü proteinden gelmektedir. 150 gram (1 su bardağı) az yağlı lor peyniri, ortalama 24 gram protein ve 200 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Yoğurt"}
          image={images.yogurt}
          paragraph="Yoğurt: çok iyi bir kalsiyum kaynağıdır. Hem tatlı, hem tuzlu besinler ile uyumlu olduğu için; ara öğünlerde meyve/kuruyemiş ile atıştırmalık olarak ya da ana öğünde yemeğin yanında tüketilebilir. Yağ alımını sınırlamak için düşük yağlı yoğurtlar tercih edilebilir.

Protein içeriği: Yoğurdun % 23’ü proteinden oluşmaktadır, 180 gram (1 su bardağı) yoğurt, ortalama 6 gram protein ve 110 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Süt"}
          image={images.milk}
          paragraph="Süt vücudun ihtiyaç duyduğu temel besinlerin birçoğunu içerir. Süt iyi bir protein kaynağı olup; kalsiyum, fosfor ve riboflavin (B2 vitamini) bakımından zengindir. Yağ alımını sınırlamak için düşük yağlı süt tercih edilebilir.

Laktoz intoleransı olan kişilerde süt tüketimi; bulantı, kusma, ishal gibi problemlere yol açabilir. Bu nedenle, laktoz intoleransı olan bireyler, laktozsuz süt tercih etmelidir.

Protein içeriği: Sütteki kalorinin % 20’si proteinden gelmektedir. 200 gram (1 su bardağı) süt, ortalama 7 gram protein ve 124 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Çiğ Badem"}
          image={images.rawAlmonds}
          paragraph="Çiğ badem: lif, E vitamini, magnezyum gibi temel besinlerden zengindir.

Protein içeriği: Çiğ bademdeki kalorilerin % 15'i proteinden gelmektedir. 30 gram (10-15 adet) çiğ badem, ortalama 6 gram protein ve 164 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Yer Fıstığı"}
          image={images.peanut}
          paragraph="Yer fıstığı: protein, lif ve magnezyum bakımından zengindir.

Protein içeriği: Yer fıstığındaki kalorilerin % 18'i proteinden gelmektedir. 40 gram (1 avuç) yer fıstığı, ortalama 10 gram protein ve 230 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Kabak Çekirdeği"}
          image={images.pumpkinSeeds}
          paragraph="Kabak çekirdeği: demir, magnezyum ve çinko gibi besinlerden zengin olup, ara öğünler için oldukça sağlıklı bir tercihtir.

          Protein içeriği: Kabak çekirdeğindeki kalorinin % 22’si proteinden gelmektedir. 20 gram (1 avuç ) kabak çekirdeği, ortalama 6 gram protein ve 113 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Brokoli"}
          image={images.broccoli}
          paragraph="Brokoli: C vitamini, K vitamini, lif ve potasyumdan zengin bir sebzedir. Brokolinin protein içeriği, diğer sebzelere kıyasla daha yüksektir.

          Protein içeriği: Brokolideki kalorinin % 33’ü proteinden gelmektedir. 100 gram (1 küçük kase) brokoli, ortalama 3 gram protein ve 31 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Brüksel Lahanası"}
          image={images.brusselsSprouts}
          paragraph="Brüksel lahanası: brokoli gibi protein içeriği diğer sebzelere kıyasla yüksektir. Ayrıca, lif, C vitamini ve diğer birçok besin maddesinden zengindir.

          Protein içeriği: Brüksel lahanasındaki kalorinin % 28’i proteinden gelmektedir. 100 gram (1 küçük kase) brüksel lahanası, ortalama 3 gram protein ve 36 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Yeşil Mercimek"}
          image={images.greenLentils}
          paragraph="Kuru baklagiller sınıfından olan yeşil mercimek; lif, magnezyum, potasyum, demir, folat, bakır ve diğer çeşitli besin maddesinden zengindir.

          En iyi bitki bazlı protein seçeneklerinden olan yeşil mercimek; özellikle vegan ve vejetaryen kişiler için oldukça faydalı bir protein kaynağıdır.
          
          Protein içeriği: Yeşil mercimekteki kalorinin % 31’i proteinden gelmektedir. 100 gram (1 küçük kase) yeşil mercimek, ortalama 8 gram protein ve 115 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Bulgur"}
          image={images.bulgurWheat}
          paragraph="Bulgur: lif ve B vitaminlerinden zengin bir besindir. Ayrıca, kan şekerini yükseltme hızı, beyaz pirince göre daha yavaştır.

          Protein içeriği: Bulgurdaki kalorinin % 14’ü proteinden gelmektedir. 150 gram (1 küçük kase) bulgur, ortalama 5 gram protein ve 125 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Yulaf"}
          image={images.oat}
          paragraph="Kahvaltı, ara öğün ve sağlıklı tarifler için iyi bir alternatif olan yulaf; lif, magnezyum, tiamin (B1 vitamini) gibi sağlıklı besin maddelerini içermektedir.

          Protein içeriği: Yulaftaki kalorinin % 14'ü proteinden gelmektedir. 100 gram yulaf (1/2 su bardağı kadar), ortalama 11 gram protein ve 307 kalori içermektedir."
        />
        <NutritionDetailCard
          title={"Kinoa"}
          image={images.kiona}
          paragraph="Kinoa: vitamin, mineral, lif ve antioksidan bakımından zengin olup, sağlık için oldukça faydalı bir besindir.

          Protein içeriği: Kinodaki kalorinin % 15’i proteinden gelmektedir. 185 gram (1 su bardağı) kinoa, ortalama 8 gram protein ve 222 kalori içermektedir."
        />
        <Space h="28"/>
      </ScrollView>
    </Container>
  );
};

export default ProteinSources;

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