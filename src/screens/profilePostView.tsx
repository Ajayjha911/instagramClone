import PostDetails from "@components/profile/post-details/post-details";
import { useAppSelector } from "@hooks/redux";
import { useRoute } from "@react-navigation/native";
import { selectAllPosts } from "@redux/slices/postSlices";
import React from "react";

const ProfilePostView = () => {
  const route = useRoute();

  const { activeUser, handleBack } = route.params;
  const allPosts = useAppSelector(selectAllPosts);

  return (
    <PostDetails
      activePosts={allPosts}
      activeUser={activeUser}
      handleBack={handleBack}
    />
  );
};

export default ProfilePostView;
