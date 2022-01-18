import {  Appbar } from "react-native-paper";
import {
  ChestBackBiceps,
  ShoulderTricepsLegs,
} from "../components/fitnessRegional";

const FitnessRegional = () => {
  return (
    <>
      <Appbar>
        <Appbar.Content title="Bölgesel Antreman" />
      </Appbar>
      <ChestBackBiceps />
    </>
  );
};

export default FitnessRegional;
