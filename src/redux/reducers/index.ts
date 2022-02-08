import { combineReducers } from "redux";
import trainingReducer from "./trainingReducer";
import themeReducer from "./themeReducer";

export default combineReducers({ trainingReducer, themeReducer });
