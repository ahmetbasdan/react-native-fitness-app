import * as actionTypes from "./actionTypes";

export const setMovement = (data: any) => ({
  type: actionTypes.SET_MOVEMENT,
  payload: data,
});
