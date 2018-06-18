import { ADD_ARTICLE } from "../constants/constants.js";
import { TOGGLE_PROGRESS, RANDOMIZE_ARTICLES, HTTP_REQUEST,
    PROGRESS_NOT_STARTED, PROGRESS_ONE_FOURTH, PROGRESS_ONE_HALF, 
    PROGRESS_THREE_FOURTHS, PROGRESS_COMPLETE } from "../constants/constants.js";
    
const cycleProgress = function(state) {
    let states = {
        PROGRESS_NOT_STARTED: PROGRESS_ONE_FOURTH,
        PROGRESS_ONE_FOURTH: PROGRESS_ONE_HALF,
        PROGRESS_ONE_HALF: PROGRESS_THREE_FOURTHS,
        PROGRESS_THREE_FOURTHS: PROGRESS_COMPLETE,
        PROGRESS_COMPLETE: PROGRESS_NOT_STARTED
    };
    return states[state];
}

//A Redux reducer which takes in the current state and an action object, and returns the appropriate new state
//Note that it is pure, which means it does not mutate state; this is why the spread operators are used.

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [...state, action.payload];
    case TOGGLE_PROGRESS:
      var clonedState = [...state];
      for (var i = 0; i < clonedState.length; i++) {
          if (clonedState[i].title === action.payload.title) {
              clonedState[i]["progress"] = cycleProgress(clonedState[i]["progress"]);
              break; 
          }
      }
      return clonedState;
    case RANDOMIZE_ARTICLES:
      var clonedState = [...state];
      for (var i = 0; i < state.length * state.length; i++) {
        let leftIndex = Math.floor(Math.random() * state.length);
        let rightIndex = Math.floor(Math.random() * state.length);
        let temp = clonedState[leftIndex];
        clonedState[leftIndex] = clonedState[rightIndex];
        clonedState[rightIndex] = temp;
      }
      return clonedState;
    case HTTP_REQUEST:
        console.log("Creating new redux state HTTP_REQUEST");
        console.log(action);
        var newString = action.payload && action.payload.data ? action.payload.data : "No action payload received";
        var clonedState = [...state];
        clonedState.push({title: "New Post", description: newString, progress: PROGRESS_NOT_STARTED});
        return clonedState;
    default:
      return state;
  }
};

export default articleReducer;
