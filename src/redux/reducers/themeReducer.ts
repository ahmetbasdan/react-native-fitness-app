import * as actionTypes from "../actions/actionTypes";

type initialStateType = "light" | "dark";

const initialState: initialStateType = "light";

const themeReducer = (state: initialStateType = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_THEME_TOGGLE:
      return state == "light" ? "dark" : "light";
    default:
      return state;
  }
};

export default themeReducer;
