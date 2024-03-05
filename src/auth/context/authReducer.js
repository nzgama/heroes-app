import { types } from "../types/types";

// const initialState = {
//     logged: false,
// }

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return { ...state, logedd: true, user: action.payload };

    case types.logaut:
      return { logeed: false };

    default:
      return state;
  }
};
