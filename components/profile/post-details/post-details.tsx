import React, { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Divider from "@components/divider/divider";
import { PostDetailsProps } from "./post-details.types";
import { POSTS } from "data";
import ElipseIcon from "react-native-vector-icons/AntDesign";
import CommentIcon from "react-native-vector-icons/EvilIcons";
import ShareIcon from "react-native-vector-icons/MaterialCommunityIcons";
import BookmarkIcon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getFullDate } from "@helpers/func";

const activePost = POSTS[0];
const { width: viewportWidth } = Dimensions.get("window");

const PostDetailsHeader: React.FC<PostDetailsProps> = ({ activeUser }) => {
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="arrow-back" size={24} color="white" />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>
          {activeUser?.user_name?.toUpperCase()}
        </Text>
        <Text style={styles.headerSubText}>Posts</Text>
      </View>
    </View>
  );
};

const PostDetails: React.FC<PostDetailsProps> = (props) => {
  const { activeUser } = props;
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = () => {
    setLiked((val) => !val);
  };
  const handleBookmark = () => {
    setBookmarked((val) => !val);
  };

  const getCommentNumber = () => {
    if (activePost?.comments?.length > 1) {
      return "all " + activePost?.comments?.length + " comments";
    }
    return activePost?.comments?.length + " comment";
  };

  return (
    <View style={styles.container}>
      <PostDetailsHeader {...props} />
      <Divider border={0.3} />
      <View style={[styles["fd-row"], styles.subHeader]}>
        <View style={styles["fd-row"]}>
          <Image
            source={activeUser.profile_image}
            style={styles.userNameImage}
          />
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{activeUser?.user_name}</Text>
            <Text style={styles.location}>{activePost.location}</Text>
          </View>
        </View>
        <View style={styles.elipseIcon}>
          <ElipseIcon name="ellipsis1" size={24} color={"white"} />
        </View>
      </View>
      <View style={styles.activePostContainer}>
        <Image source={activePost.images} style={styles.activePost} />
      </View>
      <View style={styles.actionIconContainer}>
        <View style={styles.actionItemsLeft}>
          <TouchableOpacity activeOpacity={1} onPress={handleLike}>
            <ElipseIcon
              name={liked ? "heart" : "hearto"}
              size={24}
              color={liked ? "red" : "white"}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1}>
            <CommentIcon
              name="comment"
              size={30}
              color="white"
              style={styles.commentIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={1}>
            <ShareIcon
              name="share-outline"
              size={28}
              color="white"
              style={[styles.commentIcon, styles.shareIcon]}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={1} onPress={handleBookmark}>
          <BookmarkIcon
            name={bookmarked ? "bookmark" : "bookmark-o"}
            size={24}
            color="white"
            style={styles.bookmarkIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.likedByContainer}>
        <Text style={styles.location}>
          Liked by <Text style={styles.likedByText}>ajay_kumar </Text>
          and <Text style={styles.likedByText}>118 others</Text>
        </Text>
      </View>
      <View style={styles.captionContainer}>
        <Text style={styles.userName}>
          {activeUser.user_name}{" "}
          <Text style={styles.captionText}>{activePost.description}</Text>
        </Text>
        <Text style={styles.viewAllComments}>View {getCommentNumber()}</Text>
        {activePost?.comments?.length > 1 && (
          <Text style={[styles.userName, { paddingTop: 4 }]}>
            {activePost?.comments?.[activePost?.comments?.length - 1]?.userName}{" "}
            <Text style={styles.captionText}>
              {
                activePost?.comments?.[activePost?.comments?.length - 1]
                  ?.comment
              }
            </Text>
          </Text>
        )}
        <Text style={styles.createdOn}>
          {getFullDate(activePost.createdOn)}
        </Text>
      </View>
    </View>
  );
};
export default PostDetails;

const styles = StyleSheet.create({
  "fd-row": {
    flexDirection: "row",
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    paddingBottom: 8,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: "center",
    paddingRight: 24,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "600",
    color: "gray",
  },
  headerSubText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  subHeader: {
    justifyContent: "space-between",
    paddingTop: 12,
    paddingLeft: 8,
  },
  userNameImage: {
    height: 35,
    width: 35,
    borderRadius: 100,
  },
  userNameContainer: {
    paddingLeft: 12,
  },
  userName: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  location: {
    color: "white",
    fontWeight: "normal",
  },
  elipseIcon: {
    alignSelf: "center",
    paddingRight: 8,
  },
  activePostContainer: {
    overflow: "hidden",
    paddingTop: 16,
    width: "100%",
  },
  activePost: {
    height: viewportWidth,
    width: "100%",
  },
  actionIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
  actionItemsLeft: {
    flexDirection: "row",
  },
  commentIcon: {
    paddingLeft: 12,
  },
  shareIcon: {},
  bookmarkIcon: {
    // paddingRight: 8,
  },
  likedByContainer: {
    paddingTop: 8,
    paddingLeft: 12,
  },
  likedByText: {
    fontWeight: "bold",
  },
  captionContainer: {
    paddingLeft: 12,
    paddingTop: 4,
  },
  captionText: {
    fontWeight: "normal",
  },
  viewAllComments: {
    paddingTop: 4,
    color: "white",
    fontSize: 16,
    opacity: 0.7,
  },
  createdOn: {
    paddingTop: 8,
    fontSize: 14,
    color: "white",
    opacity: 0.7,
  },
});