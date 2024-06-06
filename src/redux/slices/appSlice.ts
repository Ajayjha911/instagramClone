import { createSlice } from "@reduxjs/toolkit";
import { AppRootState } from "..";

export declare type AppState = {
  loginUser: UserState;
  userLists: UserState[];
};

export declare type UserState = {
  display_name?: string;
  user_name: string;
  profile_image: string;
  id: string;
  bio?: string;
  posts: string[];
  followers: string[];
  following: string[];
};

export const dummyUsers: UserState[] = [
  {
    id: "1",
    display_name: "Ajay Kumar",
    user_name: "__ajay_kumar",
    profile_image: "https://loremflickr.com/640/480/dslr",
    bio: "",
    posts: ["0"],
    followers: ["2", "3", "4", "5"],
    following: ["2", "3", "4", "5"],
  },
  {
    id: "2",
    display_name: "Pankaj Kumar",
    user_name: "_pankaj_kumar",
    profile_image: "https://loremflickr.com/640/480/dslr",
    bio: "",
    posts: ["0"],
    followers: ["1", "4", "3"],
    following: ["3", "5"],
  },
  {
    id: "3",
    display_name: "Nischit Shetty",
    user_name: "nischit_shetty",
    profile_image: "https://loremflickr.com/640/480/dslr",
    bio: "",
    posts: ["0"],
    followers: ["1", "2", "5"],
    following: ["2", "1"],
  },
  {
    id: "4",
    display_name: "Rajesh",
    user_name: "rajesh_de_",
    profile_image: "https://loremflickr.com/640/480/dslr",
    bio: "",
    posts: ["0"],
    followers: ["1", "2", "5"],
    following: ["2", "1", "3"],
  },
  {
    id: "5",
    display_name: "John Doe",
    user_name: "doe_john_90",
    profile_image: "https://loremflickr.com/640/480/dslr",
    bio: "",
    posts: ["0"],
    followers: ["2", "3", "4"],
    following: ["2", "1"],
  },
];

const loginUser = {
  id: "100",
  display_name: "Deepanshu Goyal",
  user_name: "deepanshu__goyal",
  profile_image: "https://loremflickr.com/640/480/dslr",
  bio: "This is dummy bio",
  posts: ["0"],
  followers: ["1", "2", "3", "4", "5"],
  following: ["1", "2", "3", "4", "5"],
};

const initialState: AppState = {
  loginUser: loginUser,
  userLists: dummyUsers,
};

const appSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
});

export const selectLoggedInUser = (state: AppRootState): UserState => {
  return state?.app?.loginUser || loginUser;
};

export const selectUsersList = (state: AppRootState): UserState[] => {
  return state?.app?.userLists || [];
};

// export const { setRecentSearches, setClearRecentSearch } = appSlice.actions;
export default appSlice.reducer;
