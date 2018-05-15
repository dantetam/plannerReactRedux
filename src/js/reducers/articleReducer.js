import { ADD_ARTICLE } from "../constants/action-types";

//A Redux reducer which takes in the current state and an action object, and returns the appropriate new state
//Note that it is pure, which means it does not mutate state; this is why the spread operators are used.

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default articleReducer;
