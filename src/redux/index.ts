import { configureStore } from "@reduxjs/toolkit";
import storyReducer from "./slices/storySlice";
import searchReducer from "./slices/searchSlice";
import appReducer from "./slices/appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    story: storyReducer,
    search: searchReducer,
  },
  devTools: {
    name: "instagramClone",
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
