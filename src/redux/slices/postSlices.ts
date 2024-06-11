import { createSlice } from "@reduxjs/toolkit";
import { AppRootState } from "..";
import images from "@constants/images";
import { usersObject } from "./appSlice";

export declare type PostType = {
  id: number;
  title: string;
  image: any;
  description: string;
  createdOn: string;
  user_id: string;
  location?: string;
  likes: LikesType[];
  comments: CommentsType[];
};

export declare type LikesType = {
  id: number;
  user_id: string;
  user_name: string;
  profile_image: any;
};

export declare type CommentsType = LikesType & {
  comment: string;
};

const dummyPosts: PostType[] = [
  {
    id: 1,
    title: "A walk through nature!",
    image: images.image1,
    description: "This is my post description!",
    createdOn: "2023-07-18",
    user_id: usersObject?.[100]?.id,
    location: "Kasuli",
    likes: [
      {
        id: 1,
        user_id: usersObject?.[2]?.id,
        user_name: usersObject?.[2]?.user_name,
        profile_image: usersObject?.[2]?.profile_image,
      },
      {
        id: 2,
        user_id: usersObject?.[1]?.id,
        user_name: usersObject?.[1]?.user_name,
        profile_image: usersObject?.[1]?.profile_image,
      },
    ],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        user_id: usersObject?.[2]?.id,
        profile_image: usersObject?.[2]?.profile_image,
        user_name: usersObject?.[2]?.user_name,
      },
      {
        id: 2,
        comment: "This is second comment!",
        user_id: usersObject?.[2]?.id,
        profile_image: usersObject?.[2]?.profile_image,
        user_name: usersObject?.[2]?.user_name,
      },
      {
        id: 3,
        comment: "This is third comment!",
        user_id: usersObject?.[3]?.id,
        profile_image: usersObject?.[3]?.profile_image,
        user_name: usersObject?.[3]?.user_name,
      },
      {
        id: 4,
        comment: "This is fourth comment!",
        user_id: usersObject?.[4]?.id,
        profile_image: usersObject?.[4]?.profile_image,
        user_name: usersObject?.[4]?.user_name,
      },
    ],
  },
  {
    id: 2,
    title: "A Voyage!",
    image: images.image1,
    description: "This is my post description!",
    createdOn: "2023-07-18",
    user_id: usersObject?.[1]?.id,
    likes: [
      {
        id: 1,
        profile_image: usersObject?.[4]?.profile_image,
        user_id: usersObject?.[4]?.id,
        user_name: usersObject?.[4]?.user_name,
      },
    ],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        profile_image: usersObject?.[4]?.profile_image,
        user_id: usersObject?.[4]?.id,
        user_name: usersObject?.[4]?.user_name,
      },
    ],
  },
  {
    id: 3,
    title: "An unknown journey.",
    image: images.image2,
    description: "This is my post description!",
    createdOn: "2023-07-18",
    user_id: usersObject?.[2]?.id,
    likes: [
      {
        id: 1,
        profile_image: usersObject?.[5]?.profile_image,
        user_id: usersObject?.[5]?.id,
        user_name: usersObject?.[5]?.user_name,
      },
    ],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        profile_image: usersObject?.[5]?.profile_image,
        user_id: usersObject?.[5]?.id,
        user_name: usersObject?.[5]?.user_name,
      },
    ],
  },
  {
    id: 4,
    title: "Here and there.",
    image: images.image3,
    description: "This is my post description!",
    createdOn: "2023-07-18",
    user_id: usersObject?.[3]?.id,
    likes: [
      {
        id: 1,
        profile_image: usersObject?.[6]?.profile_image,
        user_id: usersObject?.[6]?.id,
        user_name: usersObject?.[6]?.user_name,
      },
    ],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        profile_image: usersObject?.[6]?.profile_image,
        user_id: usersObject?.[6]?.id,
        user_name: usersObject?.[6]?.user_name,
      },
    ],
  },
  {
    id: 5,
    title: "What is your story!",
    image: images.image4,
    description: "This is my post description!",
    createdOn: "2023-07-18",
    user_id: usersObject?.[100]?.id,
    likes: [
      {
        id: 1,
        profile_image: usersObject?.[7]?.profile_image,
        user_id: usersObject?.[7]?.id,
        user_name: usersObject?.[7]?.user_name,
      },
    ],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        profile_image: usersObject?.[7]?.profile_image,
        user_id: usersObject?.[7]?.id,
        user_name: usersObject?.[7]?.user_name,
      },
    ],
  },
  {
    id: 6,
    title: "Shadow and bones!",
    image: images.image5,
    description: "This is my post description!",
    createdOn: "2023-07-18",
    user_id: usersObject?.[7]?.id,
    likes: [
      {
        id: 1,
        profile_image: usersObject?.[1]?.profile_image,
        user_id: usersObject?.[1]?.id,
        user_name: usersObject?.[1]?.user_name,
      },
      {
        id: 2,
        profile_image: usersObject?.[2]?.profile_image,
        user_id: usersObject?.[2]?.id,
        user_name: usersObject?.[2]?.user_name,
      },
    ],

    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        profile_image: usersObject?.[2]?.profile_image,
        user_id: usersObject?.[2]?.id,
        user_name: usersObject?.[2]?.user_name,
      },
    ],
  },
  {
    id: 7,
    title: "Shadow and bones!",
    image: images.image1,
    description: "This is my post description!",
    createdOn: "2023-07-18",
    user_id: usersObject?.[4]?.id,
    likes: [
      {
        id: 1,
        profile_image: usersObject?.[6]?.profile_image,
        user_id: usersObject?.[6]?.id,
        user_name: usersObject?.[6]?.user_name,
      },
    ],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        profile_image: usersObject?.[6]?.profile_image,
        user_id: usersObject?.[6]?.id,
        user_name: usersObject?.[6]?.user_name,
      },
    ],
  },
  {
    id: 8,
    title: "Shadow and bones!",
    image: images.image2,
    description: "This is my post description!",
    createdOn: "07/09/2023",
    user_id: usersObject?.[5]?.id,
    likes: [
      {
        id: 1,
        profile_image: usersObject?.[100]?.profile_image,
        user_id: usersObject?.[100]?.id,
        user_name: usersObject?.[100]?.user_name,
      },
    ],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        profile_image: usersObject?.[100]?.profile_image,
        user_id: usersObject?.[100]?.id,
        user_name: usersObject?.[100]?.user_name,
      },
    ],
  },
];

export declare type PostState = {
  posts: PostType[];
};

const initialState: PostState = {
  posts: dummyPosts,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setPostCommentsLikes: (state, action) => {
      const findIndex = state.posts.findIndex(
        (post) => post.id === action.payload.id,
      );
      state.posts[findIndex] = action.payload;
    },
  },
});

export const selectAllPosts = (state: AppRootState) => {
  return state?.posts?.posts || [];
};

export const { setPosts, setPostCommentsLikes } = postsSlice.actions;
export default postsSlice.reducer;
