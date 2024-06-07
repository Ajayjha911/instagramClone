import { createSlice } from "@reduxjs/toolkit";
import { AppRootState } from "..";
import images from "@constants/images";

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
    user_id: "100",
    location: "Kasuli",
    likes: [
      { id: 1, user_id: "100", user_name: "deepanshu" },
      { id: 2, user_id: "1", user_name: "ajay" },
    ],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        user_id: "12345",
        user_name: "__ajay_kumar",
      },
      {
        id: 2,
        comment: "This is second comment!",
        user_id: "12345",
        user_name: "__ajay_kumar",
      },
    ],
  },
  {
    id: 2,
    title: "A Voyage!",
    image: images.image1,
    description: "This is my post description!",
    createdOn: "2023-07-18",
    user_id: "1",
    likes: [{ id: 1, user_id: "12345", user_name: "" }],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        user_id: "12345",
        user_name: "",
      },
    ],
  },
  {
    id: 3,
    title: "An unknown journey.",
    image: images.image2,
    description: "This is my post description!",
    createdOn: "2023-07-18",
    user_id: "2",
    likes: [{ id: 1, user_id: "12345", user_name: "" }],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        user_id: "12345",
        user_name: "",
      },
    ],
  },
  {
    id: 4,
    title: "Here and there.",
    image: images.image3,
    description: "This is my post description!",
    createdOn: "2023-07-18",
    user_id: "3",
    likes: [{ id: 1, user_id: "12345", user_name: "" }],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        user_id: "12345",
        user_name: "",
      },
    ],
  },
  {
    id: 5,
    title: "What is your story!",
    image: images.image4,
    description: "This is my post description!",
    createdOn: "2023-07-18",
    user_id: "100",
    likes: [{ id: 1, user_id: "12345", user_name: "" }],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        user_id: "12345",
        user_name: "",
      },
    ],
  },
  {
    id: 6,
    title: "Shadow and bones!",
    image: images.image5,
    description: "This is my post description!",
    createdOn: "2023-07-18",
    user_id: "100",
    likes: [{ id: 1, user_id: "12345", user_name: "" }],

    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        user_id: "12345",
        user_name: "",
      },
    ],
  },
  {
    id: 7,
    title: "Shadow and bones!",
    image: images.image1,
    description: "This is my post description!",
    createdOn: "2023-07-18",
    user_id: "4",
    likes: [{ id: 1, user_id: "12345", user_name: "" }],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        user_id: "12345",
        user_name: "",
      },
    ],
  },
  {
    id: 8,
    title: "Shadow and bones!",
    image: images.image2,
    description: "This is my post description!",
    createdOn: "07/09/2023",
    user_id: "5",
    likes: [{ id: 1, user_id: "12345", user_name: "" }],
    comments: [
      {
        id: 1,
        comment: "This is first comment!",
        user_id: "12345",
        user_name: "",
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
    setPostLikes: (state, action) => {
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

export const { setPosts, setPostLikes } = postsSlice.actions;
export default postsSlice.reducer;
