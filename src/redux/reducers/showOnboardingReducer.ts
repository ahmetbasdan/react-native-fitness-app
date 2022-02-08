import * as actionTypes from "../actions/actionTypes";

const initialState: boolean = true;

const showOnboardingReducer = (state: boolean = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_SHOW_ONBOARDING:
      return true;
    case actionTypes.SET_HIDE_ONBOARDING:
      return false;
    default:
      return state;
  }
};

export default showOnboardingReducer;
