import * as actionTypes from "../actions/actionTypes";

const initialState = {
  fullBody: {
    chestPress: ["", "", ""],
    butterfly: ["", "", ""],
    shoulderPress: ["", "", ""],
    latPulldown: ["", "", ""],
    lowRow: ["", "", ""],
    dumbellCurls: ["", "", ""],
    scottCurl: ["", "", ""],
    pushDown: ["", "", ""],
    squat: ["", "", ""],
  },
  chestBackBiceps: {
    benchPress: ["", "", "", ""],
    butterfly: ["", "", ""],
    inlineBenchPress: ["", "", "", ""],
    dumbellPullRow: ["", "", ""],
    latPulldown: ["", "", ""],
    lowRow: ["", "", ""],
    dumbellRow: ["", "", ""],
    zBarBarbellCurl: ["", "", "", ""],
    inclineDumbellCurl: ["", "", ""],
    scottCurl: ["", "", ""],
    wrist: ["", ""],
  },
  shoulderTricepsLegs: {
    shoulderPress: ["", "", "", ""],
    lateralPress: ["", "", ""],
    bentOverRaise: ["", "", ""],
    uprightRow: ["", "", ""],
    zBarLying: ["", "", ""],
    dumbellTriceps: ["", "", ""],
    pushDown: ["", "", ""],
    squat: ["", "", ""],
    legsExtension: ["", "", ""],
    legsCurl: ["", "", ""],
  },
};

const trainingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_MOVEMENT:
      return action.payload;
    default:
      return state;
  }
};

export default trainingReducer;
