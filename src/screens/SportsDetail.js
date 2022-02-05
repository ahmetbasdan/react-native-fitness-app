import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { Appbar, Colors } from "react-native-paper";
import { Space, SporMovementCard } from "../components";
import { useRoute } from "@react-navigation/native";

const SportsDetail = () => {
  const [loading, setLoading] = useState(true);
  const { params } = useRoute();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContiner}>
        <ActivityIndicator size={"large"} color={Colors.green600} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Appbar>
        <Appbar.Content title={params?.title || "Spor Antremanı"} />
      </Appbar>
      <ScrollView contentContainerStyle={styles.content}>
        {params?.data.map((item, index) => (
          <View key={index}>
            <Space />
            <SporMovementCard index={index} {...item} />
          </View>
        ))}
        <Space />
      </ScrollView>
    </View>
  );
};

export default SportsDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginHorizontal: 4,
  },
  loadingContiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
