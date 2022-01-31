import * as actionTypes from "./actionTypes";

export const setUser = (user: any) => ({
  type: actionTypes.SET_USER,
  payload: user,
});

export const resetUser = () => ({
  type: actionTypes.RESET_USER,
});
