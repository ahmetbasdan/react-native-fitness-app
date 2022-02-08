import { combineReducers } from "redux";
import trainingReducer from "./trainingReducer";
import themeReducer from "./themeReducer";
import showOnboardingReducer from "./showOnboardingReducer";

export default combineReducers({
  trainingReducer,
  themeReducer,
  showOnboardingReducer,
});
