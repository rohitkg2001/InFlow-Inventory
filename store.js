// store.js
import { createStore } from "redux";

// Example reducer (replace with your actual reducer)
const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case "SOME_ACTION":
      return { ...state, someData: action.payload };
    default:
      return state;
  }
};

// Create the Redux store
export const store = createStore(rootReducer);
