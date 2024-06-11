import { createSlice } from "@reduxjs/toolkit";

import { Posts } from "data";
import { AppRootState } from "..";
import { PostType } from "./postSlices";
import images from "@constants/images";
import { usersObject } from "./appSlice";
const dummyPosts = [
  {
    id: 1,
    img: images.image1,
    username: "BlossomBelle",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
  {
    id: 2,
    img: images.image2,
    username: "LavenderLuxe_",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
  {
    id: 3,
    img: images.image3,
    username: "RosyRadiance_",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
  {
    id: 4,
    img: images.image4,
    username: "DiamondDuchess_",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
  {
    id: 5,
    img: images.image5,
    username: "CherryCharm_",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
];

const profileSlice = createSlice({
  name: "Profile",
  initialState: dummyPosts,
  reducers: {},
});

export const getUserPost = (state: AppRootState) => {
  return state.profile;
};

export default profileSlice.reducer;
