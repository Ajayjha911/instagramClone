import React from "react";

import InstaPost from "@components/Post";
import ZoomInView from "@components/zoom-in-effect/zoom-in-view";
import { getUserPost } from "@redux/slices/profileSlice";
import { useAppSelector } from "@hooks/redux";
import { useRoute } from "@react-navigation/native";

const ViewPost = () => {
  const UserPostpost = useAppSelector(getUserPost);
  const route = useRoute();

  return <InstaPost data={UserPostpost} itemIndex={route.params?.itemIndex} />;
};

export default ViewPost;
