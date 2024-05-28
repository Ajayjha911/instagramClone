import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices";

const store = configureStore({
  reducer: {
    story: rootReducer,
  },
});

export default store;
