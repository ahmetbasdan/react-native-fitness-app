import * as actionTypes from "../actions/actionTypes";

const initialState = {};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return action.payload;
    case actionTypes.RESET_USER:
      return initialState;
    default:
      return state;
  }
};

export default userReducer