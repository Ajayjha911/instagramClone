// slices/index.js
import { combineReducers } from "@reduxjs/toolkit";
import storyReducer from "./storySlice";

const rootReducer = combineReducers({
  story: storyReducer,
});

export default rootReducer;
