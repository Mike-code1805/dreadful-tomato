import { types } from "./SerieTypes";

export const serieReducer = (state, action) => {
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
