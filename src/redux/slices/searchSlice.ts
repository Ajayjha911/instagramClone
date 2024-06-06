import { createSlice } from "@reduxjs/toolkit";
import { AppRootState } from "..";

export declare type SearchState = {
  recentSearches: SearchUsersState[];
};

export declare type SearchUsersState = {
  display_name?: string;
  user_name: string;
  profile_image: string;
  id: string;
  bio?: string;
  posts: string[];
  followers: string[];
  following: string[];
};

export const dummyUsers: SearchUsersState[] = [
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

const initialState: SearchState = {
  recentSearches: dummyUsers,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setRecentSearches: (state, action) => {
      const found = state.recentSearches.findIndex(
        (user) => user.user_name === action.payload.user_name,
      );
      if (found === -1) {
        state.recentSearches = [...state.recentSearches, action.payload];
      }
    },
    setClearRecentSearch: (state, action) => {
      const found = state.recentSearches.findIndex(
        (user) => user.user_name === action.payload.user_name,
      );
      if (found > -1) {
        const fresh = JSON.parse(JSON.stringify(state.recentSearches));
        fresh.splice(found, 1);
        state.recentSearches = fresh;
      }
    },
  },
});

export const selectRecentSearches = (state: AppRootState) => {
  return state?.search?.recentSearches || [];
};

export const { setRecentSearches, setClearRecentSearch } = searchSlice.actions;
export default searchSlice.reducer;
