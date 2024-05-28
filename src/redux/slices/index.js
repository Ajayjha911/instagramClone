// slices/index.js
import { combineReducers } from "@reduxjs/toolkit";
import storyReducer from "./storySlice";

const rootReducer = combineReducers({
  counter: storyReducer,
});

export default rootReducer;
