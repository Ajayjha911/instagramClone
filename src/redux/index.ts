import { configureStore } from "@reduxjs/toolkit";
import storyReducer from "./slices/storySlice";
import searchReducer from "./slices/searchSlice";
import appReducer from "./slices/appSlice";
import postsReducer from "./slices/postSlices";

const store = configureStore({
  reducer: {
    app: appReducer,
    story: storyReducer,
    search: searchReducer,
    posts: postsReducer,
  },
  devTools: {
    name: "instagramClone",
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
