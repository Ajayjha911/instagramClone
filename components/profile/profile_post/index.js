import React, { useMemo } from "react";
import { useWindowDimensions, View, Image } from "react-native";
import styles from "./profile_post.style";

const ProfilePost = ({ post }) => {
  const screenWidth = useWindowDimensions().width - 20;
  const { images } = post;

  return (
    <View style={styles.imageContainer(screenWidth)}>
      <Image
        source={images[0]}
        style={styles.contentImage}
        resizeMode="cover"
      />
    </View>
  );
};

export default ProfilePost;
