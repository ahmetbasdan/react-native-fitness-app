import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Appbar, ActivityIndicator } from "react-native-paper";
import { Container, Space, TrainingMovementCard } from "../components";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { setMovement } from "../redux/actions/movementAction";

const TrainingDetail = () => {
  const [loading, setLoading] = useState(true);
  const { params } = useRoute();
  const dispatch = useDispatch();
  const trainingReducer = useSelector((state) => state.trainingReducer);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <Container style={styles.loadingContiner}>
        <ActivityIndicator size={"large"} animating />
      </Container>
    );
  }

  const setReduxData = (training, movement, netxSetData) => {
    const nextTrainingReducer = { ...trainingReducer };
    const prevSetData = nextTrainingReducer[training][movement];

    if (!(prevSetData.toString() == netxSetData.toString())) {
      nextTrainingReducer[training][movement] = netxSetData;
      dispatch(setMovement(nextTrainingReducer));
    }
  };

  return (
    <Container>
      <Appbar>
        <Appbar.Content title={params?.title || "Spor Antremanı"} />
      </Appbar>
      <ScrollView contentContainerStyle={styles.content}>
        {params?.data.map((item, index) => {
          return (
            <View key={index}>
              <Space />
              <TrainingMovementCard
                index={index}
                data={trainingReducer?.[item.training]?.[item.movement]}
                onSetData={(setData) =>
                  setReduxData(item.training, item.movement, setData)
                }
                {...item}
              />
            </View>
          );
        })}
        <Space />
      </ScrollView>
    </Container>
  );
};

export default TrainingDetail;

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
