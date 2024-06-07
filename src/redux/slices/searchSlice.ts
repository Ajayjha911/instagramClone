import { createSlice } from "@reduxjs/toolkit";
import { AppRootState } from "..";
import { dummyUsers } from "./appSlice";

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

const initialState: SearchState = {
  recentSearches: [dummyUsers[0], dummyUsers[1], dummyUsers[2]],
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
