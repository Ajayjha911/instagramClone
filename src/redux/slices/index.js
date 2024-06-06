// slices/index.js
import { combineReducers } from "@reduxjs/toolkit";
import storyReducer from "./storySlice";
import searchReducer from "./searchSlice";

const rootReducer = combineReducers({
  story: storyReducer,
  search: searchReducer,
});

export default rootReducer;
