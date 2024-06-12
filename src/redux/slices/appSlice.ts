import { createSlice } from "@reduxjs/toolkit";
import { AppRootState } from "..";
import images from "@constants/images";

export declare type AppState = {
  loginUser: UserState;
  userLists: UserState[];
};

export declare type UserState = {
  display_name?: string;
  user_name: string;
  profile_image: any;
  id: string;
  bio?: string;
  followers: FollowerFollowingType[];
  following: FollowerFollowingType[];
};

export const usersObject = {
  "1": {
    id: "1",
    display_name: "Ajay Kumar",
    user_name: "__ajay_kumar",
    profile_image: images.profile,
  },
  "2": {
    id: "2",
    display_name: "Pankaj Kumar",
    user_name: "_pankaj_kumar",
    profile_image: images.profile1,
  },
  "3": {
    id: "3",
    display_name: "Nischit Shetty",
    user_name: "nischit_shetty",
    profile_image: images.profile2,
  },
  "4": {
    id: "4",
    display_name: "Rajesh",
    user_name: "rajesh_de_",
    profile_image: images.profile3,
  },
  "5": {
    id: "5",
    display_name: "John Doe",
    user_name: "doe_john_90",
    profile_image: images.profile4,
  },
  "6": {
    id: "6",
    display_name: "Alisa",
    user_name: "alisa_30_10",
    profile_image: images.profile5,
  },
  "7": {
    id: "7",
    display_name: "John Wick",
    user_name: "wick_john",
    profile_image: images.profile,
  },
  "100": {
    id: "100",
    display_name: "Deepanshu Goyal",
    user_name: "deepanshu__goyal",
    profile_image: images.profile,
  },
};

export declare type FollowerFollowingType = {
  id: string;
  user_name: string;
  display_name: string;
  profile_image: any;
};

export const dummyUsers: UserState[] = [
  {
    id: usersObject?.[1].id,
    display_name: usersObject?.[1].display_name,
    user_name: usersObject?.[1].user_name,
    profile_image: usersObject?.[1].profile_image,
    bio: "Welcome to Instagram Clone App",
    followers: [
      usersObject?.[2],
      usersObject?.[3],
      usersObject?.[4],
      usersObject?.[5],
    ],
    following: [
      usersObject?.[2],
      usersObject?.[3],
      usersObject?.[4],
      usersObject?.[5],
    ],
  },
  {
    id: usersObject?.[2].id,
    display_name: usersObject?.[2].display_name,
    user_name: usersObject?.[2].user_name,
    profile_image: usersObject?.[2].profile_image,
    bio: "Welcome to Instagram Clone App",
    followers: [usersObject?.[1], usersObject?.[4], usersObject?.[3]],
    following: [usersObject?.[3], usersObject?.[5]],
  },
  {
    id: usersObject?.[3].id,
    display_name: usersObject?.[3].display_name,
    user_name: usersObject?.[3].user_name,
    profile_image: usersObject?.[3].profile_image,
    bio: "Welcome to Instagram Clone App",
    followers: [usersObject?.[1], usersObject?.[2], usersObject?.[5]],
    following: [usersObject?.[2], usersObject?.[1]],
  },
  {
    id: usersObject?.[4].id,
    display_name: usersObject?.[4].display_name,
    user_name: usersObject?.[4].user_name,
    profile_image: usersObject?.[4].profile_image,
    bio: "Welcome to Instagram Clone App",
    followers: [usersObject?.[1], usersObject?.[2], usersObject?.[5]],
    following: [usersObject?.[1], usersObject?.[2], usersObject?.[3]],
  },
  {
    id: usersObject?.[5].id,
    display_name: usersObject?.[5].display_name,
    user_name: usersObject?.[5].user_name,
    profile_image: usersObject?.[5].profile_image,
    bio: "Welcome to Instagram Clone App",
    followers: [usersObject?.[2], usersObject?.[4], usersObject?.[3]],
    following: [usersObject?.[1], usersObject?.[2]],
  },
  {
    id: usersObject?.[6].id,
    display_name: usersObject?.[6].display_name,
    user_name: usersObject?.[6].user_name,
    profile_image: usersObject?.[6].profile_image,
    bio: "Welcome to Instagram Clone App",
    followers: [usersObject?.[4]],
    following: [usersObject?.[1], usersObject?.[2]],
  },
  {
    id: usersObject?.[7].id,
    display_name: usersObject?.[7].display_name,
    user_name: usersObject?.[7].user_name,
    profile_image: usersObject?.[7].profile_image,
    bio: "Welcome to Instagram Clone App",
    followers: [
      usersObject?.[1],
      usersObject?.[4],
      usersObject?.[3],
      usersObject?.[5],
    ],
    following: [usersObject?.[1], usersObject?.[2]],
  },
];

const loginUser = {
  id: usersObject?.[100].id,
  display_name: usersObject?.[100].display_name,
  user_name: usersObject?.[100].user_name,
  profile_image: usersObject?.[100].profile_image,
  bio: "Welcome to Instagram Clone App",
  followers: [
    usersObject?.[1],
    usersObject?.[4],
    usersObject?.[3],
    usersObject?.[5],
    usersObject?.[2],
  ],
  following: [
    usersObject?.[1],
    usersObject?.[4],
    usersObject?.[3],
    usersObject?.[5],
    usersObject?.[2],
    usersObject?.[6],
    usersObject?.[7],
  ],
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
