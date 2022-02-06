import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Avatar,
  Card,
  Modal,
  Portal,
  IconButton,
  Colors,
  Badge,
} from "react-native-paper";
import { benchPressGif } from "../assets/gifs";
import { fitnessBg } from "../assets/images";

interface IProps {
  title: string;
  subTitle: string;
  gif?: NodeRequire;
  bg?: NodeRequire;
  index: number;
}

const TrainingMovementCard: React.FC<IProps> = ({
  title = "Başlık",
  subTitle = "Alt Başlık",
  gif = benchPressGif,
  bg = fitnessBg,
  index = 1,
}) => {
  const [gifVisible, setGifVisible] = useState(false);
  const [selected, setSelected] = useState(false);

  const showModal = () => {
    setSelected(true);
    setGifVisible(true);
  };

  const hideModal = () => setGifVisible(false);

  const selectedFalse = () => setSelected(false);

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
          <Card.Cover source={gif} />
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
});