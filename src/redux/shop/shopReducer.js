import shopData from "./shopData";

const INITIAL_STATE = {
  data: shopData,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
