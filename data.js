import { images } from "./constants";
import Img1 from "./assets/img1.jpeg";
import Img2 from "./assets/img2.jpeg";
import Img3 from "./assets/img3.jpg";
import Img4 from "./assets/img4.jpg";
import Img5 from "./assets/img5.jpg";

import user1 from "./assets/chat/user1.jpg";
import user2 from "./assets/chat/user2.jpg";
import user3 from "./assets/chat/user3.jpg";
import user4 from "./assets/chat/user4.jpg";

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

export const Posts = [
  {
    id: 1,
    img: Img1,
    username: "BlossomBelle",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
  {
    id: 2,
    img: Img2,
    username: "LavenderLuxe_",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
  {
    id: 3,
    img: Img3,
    username: "RosyRadiance_",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
  {
    id: 4,
    img: Img4,
    username: "DiamondDuchess_",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
  {
    id: 5,
    img: Img5,
    username: "CherryCharm_",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
];

export const notifications = [
  {
    id: 1,
    type: "followRequest",
    user: "aabvc_f445",
    others: 2,
    time: "1w",
    avatar: user1,
  },
  {
    id: 2,
    type: "suggestion",
    user: "gonsonqueenvictoria",
    time: "4d",
    avatar: user2,
  },
  { id: 3, type: "like", user: "jack", time: "5d", avatar: user3 },
  { id: 4, type: "follow", user: "rc0511011", time: "1w", avatar: user4 },
  {
    id: 5,
    type: "like",
    user: "freak_treat_______",
    others: ["jack", "tom"],
    time: "1w",
    avatar: user3,
  },
];
