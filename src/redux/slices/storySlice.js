import { createSlice } from "@reduxjs/toolkit";

const storySlice = createSlice({
  name: "story",
  initialState: {
    storyImage: null,
    timestamp: null,
    viewedStories: [], // Added to track viewed stories with timestamps
  },
  reducers: {
    selectStoryImage: (state, action) => {
      state.storyImage = action.payload;
      state.timestamp = Date.now();
    },
    resetStoryImage: (state) => {
      state.storyImage = null;
      state.timestamp = null;
    },
    addViewedStory: (state, action) => {
      state.viewedStories.push(action.payload); // Added to track viewed stories
    },
    clearViewedStories: (state) => {
      state.viewedStories = [];
    },
  },
});

export const {
  selectStoryImage,
  resetStoryImage,
  addViewedStory,
  clearViewedStories,
} = storySlice.actions;
export default storySlice.reducer;
