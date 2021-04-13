import { combineReducers } from "redux";

// Our list of entries in one reducer

const listReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  listReducer,
});
