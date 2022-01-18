import React, { useState } from "react";
import { Button, Card, Divider, Modal, Portal } from "react-native-paper";
import { benchPressGif } from "../assets/gifs";
import { fitnessBg } from "../assets/images";

interface IProps {
  title: string;
  subTitle: string;
  gif?: NodeRequire;
  bg?: NodeRequire;
}

const SporMovementCard: React.FC<IProps> = ({
  title = "Başlık",
  subTitle = "Alt Başlık",
  gif = benchPressGif,
  bg = fitnessBg,
}) => {
  const [gifVisible, setGifVisible] = useState(false);

  const showModal = () => setGifVisible(true);

  const hideModal = () => setGifVisible(false);

  return (
    <>
      <Card style={{ marginHorizontal: 8 }} onPress={showModal}>
        <Card.Cover source={bg} />
        <Card.Title
          title={title}
          subtitle={subTitle}
          subtitleStyle={{ color: "#000", fontSize: 16 }}
        />
        <Divider />
        <Card.Actions>
          <Button icon={"play-circle"} onPress={showModal}>
            Hareketi İzle
          </Button>
        </Card.Actions>
      </Card>
      <Portal>
        <Modal
          visible={gifVisible}
          onDismiss={hideModal}
          contentContainerStyle={{ marginHorizontal: 12 }}
        >
          <Card.Cover source={gif} />
        </Modal>
      </Portal>
    </>
  );
};

export default SporMovementCard;
