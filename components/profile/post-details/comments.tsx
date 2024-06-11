import Divider from "@components/divider/divider";
import { fresh } from "@helpers/func";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { selectLoggedInUser } from "@redux/slices/appSlice";
import { PostType, setPostCommentsLikes } from "@redux/slices/postSlices";
import React, { useMemo, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/AntDesign";

declare type PostCommentsProps = {
  posts: PostType[];
  selectedPostId: number;
};

const PostComments: React.FC<PostCommentsProps> = ({
  posts,
  selectedPostId,
}) => {
  const dispatch = useAppDispatch();
  const style = getStyles();
  const activeUser = useAppSelector(selectLoggedInUser);
  const [comment, setComment] = useState("");

  const activePost = useMemo(() => {
    return posts?.find((post) => post.id === selectedPostId);
  }, [posts, selectedPostId]);

  const handleComment = () => {
    const freshPosts = fresh(activePost);
    freshPosts.comments.push({
      id: activePost?.comments?.length + 1,
      user_id: activeUser?.id,
      user_name: activeUser?.user_name,
      comment: comment,
      profile_image: activeUser?.profile_image,
    });
    dispatch(setPostCommentsLikes(freshPosts));
    setComment("");
  };

  const activeComments = useMemo(() => {
    const reversedArray = [...activePost.comments].reverse();
    return reversedArray;
  }, [activePost]);

  return (
    <View style={style.container}>
      <ScrollView
        style={{
          flex: 1,
          marginBottom: 62,
        }}
      >
        {activeComments?.map((comm, index) => {
          return (
            <View key={index}>
              <View
                style={[
                  style.commentContainer,
                  index === 0 && {
                    paddingTop: 16,
                  },
                ]}
              >
                <Image
                  source={comm.profile_image}
                  style={style.userNameImage}
                />
                <View style={style.commentTextContainer}>
                  <Text style={style.commentAuthor}>{comm?.user_name}</Text>
                  <Text style={style.comment}>{comm.comment}</Text>
                </View>
              </View>
            </View>
          );
        })}
        <View style={{ paddingTop: 82 }} />
      </ScrollView>
      <View style={style.commentInputContainer}>
        <Image source={activeUser.profile_image} style={style.userNameImage} />
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="Add a comment..."
            multiline
            style={style.commentInput}
            onChangeText={(value) => setComment(value)}
            value={comment}
          />
          {comment?.length > 0 && (
            <View style={style.commentIconContainer}>
              <TouchableOpacity onPress={handleComment} activeOpacity={1}>
                <Icon
                  name="arrowup"
                  size={20}
                  color="white"
                  style={style.commentIcon}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};
export default PostComments;

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    commentContainer: {
      flexDirection: "row",
      paddingBottom: 16,
    },
    commentTextContainer: {
      paddingLeft: 16,
    },
    userNameImage: {
      height: 35,
      width: 35,
      borderRadius: 100,
    },
    commentAuthor: {
      fontSize: 14,
      fontWeight: "700",
      color: "white",
    },
    comment: {
      fontSize: 14,
      color: "white",
    },
    commentInputContainer: {
      flexDirection: "row",
      position: "absolute",
      bottom: 40,
      left: 0,
      right: 0,
      flex: 1,
      backgroundColor: "black",
    },
    commentInput: {
      borderRadius: 25,
      borderColor: "gray",
      borderWidth: 1,
      padding: 10,
      paddingHorizontal: 16,
      color: "white",
      width: "auto",
      flex: 1,
      marginLeft: 8,
    },
    commentIconContainer: {
      padding: 2,
      backgroundColor: "blue",
      position: "absolute",
      right: 12,
      borderRadius: 12,
      width: 30,
      top: 5,
    },
    commentIcon: {
      alignSelf: "center",
    },
  });
};
