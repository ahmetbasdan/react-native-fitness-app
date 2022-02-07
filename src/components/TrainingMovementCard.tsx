import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Card,
  Modal,
  Portal,
  IconButton,
  Colors,
  Badge,
  TextInput,
  Button,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { benchPressGif } from "../assets/gifs";
import { fitnessBg } from "../assets/images";
import { setMovement } from "../redux/actions/movementAction";
import { movementType, trainingType } from "../typings";
import Row from "./Row";
import Space from "./Space";

interface IProps {
  title: string;
  subTitle: string;
  gif?: NodeRequire;
  bg?: NodeRequire;
  index: number;
  training: trainingType;
  movement: movementType;
}

const TrainingMovementCard: React.FC<IProps> = ({
  title = "Başlık",
  subTitle = "Alt Başlık",
  gif = benchPressGif,
  bg = fitnessBg,
  index = 1,
  movement,
  training,
}) => {
  const [gifVisible, setGifVisible] = useState(false);
  const [selected, setSelected] = useState(false);
  const [setData, setSetData] = useState<string[]>([]);
  const dispatch = useDispatch();
  const trainingReducer: any = useSelector<any>(
    (state) => state.trainingReducer
  );

  useEffect(() => {
    initialSetData();
  }, []);

  const showModal = () => {
    setSelected(true);
    setGifVisible(true);
  };

  const hideModal = () => {
    setGifVisible(false);
    saveSetData();
  };

  const selectedFalse = () => setSelected(false);

  const initialSetData = () => {
    const setDefaultData: string[] = [];

    const trainigMovementData: any = trainingReducer?.[training]?.[movement];

    trainigMovementData.forEach((element: any) => {
      setDefaultData.push(element);
    });

    setSetData(setDefaultData);
  };

  const saveSetData = () => {
    const nextTrainingData = { ...trainingReducer };
    nextTrainingData[training][movement] = setData;
    dispatch(setMovement(nextTrainingData));
  };

  const setRender = () => {
    const jsxData: JSX.Element[] = [];

    setData.map((item, index) => {
      jsxData.push(
        <View key={index}>
          <Space />
          <Row>
            <TextInput
              value={item}
              onChangeText={(val) => {
                const nextSetData = [...setData];
                nextSetData[index] = val;
                setSetData(nextSetData);
              }}
              style={styles.setInput}
              keyboardType="numeric"
              placeholder={`${index + 1}. Set Ağırlığı`}
            />
            <Button style={styles.setSaveInput} mode="outlined">
              KG
            </Button>
          </Row>
        </View>
      );
    });
    return jsxData;
  };

  return (
    <>
      <Card
        style={{
          marginHorizontal: 8,
          paddingVertical: 8,
          borderWidth: selected ? 1 : 0,
          borderColor: selected ? Colors.pink500 : null,
        }}
        onPress={showModal}
        onLongPress={selectedFalse}
      >
        <View style={styles.cardRow}>
          <View style={styles.avatarContent}>
            <Badge style={styles.sortNumber}>{index + 1}</Badge>
            <Avatar.Image source={bg}></Avatar.Image>
          </View>
          <View style={styles.rightContent}>
            <Card.Title
              title={title}
              subtitle={subTitle}
              subtitleStyle={styles.subtitleStyle}
            />
          </View>
          <IconButton
            icon={gifVisible ? "pause-circle" : "play-circle"}
            color={Colors.green500}
            size={41}
            onPress={showModal}
            style={styles.playButton}
          />
        </View>
      </Card>
      <Portal>
        <Modal
          visible={gifVisible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modal}
        >
          <Card>
            <Card.Cover source={gif} />
            <Card.Content>{setRender()}</Card.Content>
          </Card>
        </Modal>
      </Portal>
    </>
  );
};

export default TrainingMovementCard;

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: "row",
  },
  avatarContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  leftContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
  },
  sortNumber: {
    position: "absolute",
    zIndex: 999,
    top: 0,
    left: 0,
  },
  rightContent: {
    flex: 4,
  },
  subtitleStyle: {
    fontSize: 16,
  },
  playButton: {
    position: "absolute",
    right: 0,
  },
  modal: {
    marginHorizontal: 12,
  },
  setInput: {
    flex: 2,
    height: 25,
    justifyContent: "center",
  },
  setSaveInput: {
    justifyContent: "center",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
});
