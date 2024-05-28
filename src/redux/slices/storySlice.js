import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storyImage: null,
  viewed: false,
  timestamp: null,
};

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    selectStoryImage: (state, action) => {
      state.storyImage = action.payload;
      state.viewed = false;
      state.timestamp = Date.now();
    },
    viewStoryImage: (state) => {
      state.viewed = true;
    },
    resetStoryImage: (state) => {
      state.storyImage = null;
      state.viewed = false;
      state.timestamp = null;
    },
  },
});

export const { selectStoryImage, viewStoryImage, resetStoryImage } =
  storySlice.actions;
export default storySlice.reducer;
