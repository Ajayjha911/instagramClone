import React from "react";

import InstaPost from "@components/Post";

import { useRoute } from "@react-navigation/native";

const ViewPost = () => {
  const route = useRoute();

  return (
    //@ts-ignore
    <InstaPost data={route.params?.data} itemIndex={route.params?.itemIndex} />
  );
};

export default ViewPost;
