import { images } from "./constants";

export const POSTS = [
  {
    id: 0,
    title: "A walk through nature!",
    images: [images.image4, images.image1],
    description: "This is my post description!",
    createdOn: "07/09/2023",
    userId: "997",
    likes: [{ id: 0, userId: "12345" }],
    dislikes: [{ id: 0, userId: "12345" }],
    shares: [{ id: 0, userId: "12345" }],
    comments: [{ id: 0, comment: "This is first comment!", userId: "12345" }],
  },
  {
    id: 1,
    title: "A Voyage!",
    images: [images.image2, images.image5],
    description: "This is my post description!",
    createdOn: "07/09/2023",
    userId: "12345",
    likes: [{ id: 0, userId: "12345" }],
    dislikes: [{ id: 0, userId: "12345" }],
    shares: [{ id: 0, userId: "12345" }],
    comments: [{ id: 0, comment: "This is first comment!", userId: "12345" }],
  },
  {
    id: 2,
    title: "An unknown journey.",
    images: [images.image2],
    description: "This is my post description!",
    createdOn: "07/09/2023",
    userId: "12345",
    likes: [{ id: 0, userId: "12345" }],
    dislikes: [{ id: 0, userId: "12345" }],
    shares: [{ id: 0, userId: "12345" }],
    comments: [{ id: 0, comment: "This is first comment!", userId: "12345" }],
  },
  {
    id: 3,
    title: "Here and there.",
    images: [images.image2, images.image4],
    description: "This is my post description!",
    createdOn: "07/09/2023",
    userId: "12345",
    likes: [{ id: 0, userId: "12345" }],
    dislikes: [{ id: 0, userId: "12345" }],
    shares: [{ id: 0, userId: "12345" }],
    comments: [{ id: 0, comment: "This is first comment!", userId: "12345" }],
  },
  {
    id: 4,
    title: "What is your story!",
    images: [images.image5],
    description: "This is my post description!",
    createdOn: "07/09/2023",
    userId: "997",
    likes: [{ id: 0, userId: "12345" }],
    dislikes: [{ id: 0, userId: "12345" }],
    shares: [{ id: 0, userId: "12345" }],
    comments: [{ id: 0, comment: "This is first comment!", userId: "12345" }],
  },
  {
    id: 5,
    title: "Shadow and bones!",
    images: [images.image4],
    description: "This is my post description!",
    createdOn: "07/09/2023",
    userId: "997",
    likes: [{ id: 0, userId: "12345" }],
    dislikes: [{ id: 0, userId: "12345" }],
    shares: [{ id: 0, userId: "12345" }],
    comments: [{ id: 0, comment: "This is first comment!", userId: "12345" }],
  },
];

export const USERS = [
  {
    id: "12345",
    name: "Ast",
    userName: "ast",
    profile: images.profile2,
    email: "ast@gmail.com",
    password: "myPassword",
    mobile: "12345",
    bio: "Hey! This is my bio!",
    age: 25,
    posts: [{ id: "1" }, { id: "2" }, { id: "3" }],
    followers: [{ id: "997" }],
    following: [{ id: "997" }],
  },
  {
    id: "997",
    name: "Adarsh",
    userName: "adarsh",
    profile: images.profile,
    email: "adarsh@gmail.com",
    password: "myPassword",
    mobile: "997",
    bio: "Hey! This is my bio.",
    age: 25,
    posts: [{ id: "0" }, { id: "4" }, { id: "5" }],
    followers: [{ id: "12345" }],
    following: [{ id: "12345" }],
  },
];

export const DATA = [
  {
    id: "jhgjfhd787",
    Title: "Rose",
    subTitle: "Lorem Ipum",
    image: require("./assets/post/post1.jpg"),
  },
  {
    id: "fdgdfgdfgf",
    Title: "Janaki",
    subTitle: "Lorem Ipum",
    image: require("./assets/post/post2.jpg"),
  },
  {
    id: "cvbfddffff",
    Title: "Renuka",
    subTitle: "Lorem Ipum",
    image: require("./assets/post/post3.jpg"),
  },
  {
    id: "dfghfghfgh",
    Title: "Sita",
    subTitle: "Lorem Ipum",
    image: require("./assets/post/post4.jpg"),
  },
  {
    id: "iuyiouyiuo",
    Title: "Gita",
    subTitle: "Lorem Ipum",
    image: require("./assets/post/post5.jpg"),
  },
];
