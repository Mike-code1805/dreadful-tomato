import { types } from "./DataTypes";

export const dataReducer = (state, action) => {
  switch (action.type) {
    case types.CREATE:
      state = action.payload;
      return state;
    case types.CLEAR:
      return action.payload;
    default:
      return state;
  }
};
