import storage from "@react-native-async-storage/async-storage";

const configurePersist = {
  key: "root",
  storage,
  whitelist: ["trainingReducer"],
};

export default configurePersist;
