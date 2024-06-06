import { createSlice } from "@reduxjs/toolkit";

const storySlice = createSlice({
  name: "story",
  initialState: {
    stories: [],
    viewedStories: [],
  },
  reducers: {
    addStoryImage: (state, action) => {
      state.stories.push({ uri: action.payload, timestamp: Date.now() });
    },
    resetStories: (state) => {
      state.stories = [];
    },
    addViewedStory: (state, action) => {
      state.viewedStories.push(action.payload);
    },
    clearViewedStories: (state) => {
      state.viewedStories = [];
    },
  },
});

export const {
  addStoryImage,
  resetStories,
  addViewedStory,
  clearViewedStories,
} = storySlice.actions;
export default storySlice.reducer;
