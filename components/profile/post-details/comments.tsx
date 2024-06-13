import { fresh } from "@helpers/func";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { selectLoggedInUser } from "@redux/slices/appSlice";
import { PostType, setPostCommentsLikes } from "@redux/slices/postSlices";
import React, { useMemo, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

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
    const reversedArray = [...activePost?.comments]?.reverse();
    return reversedArray;
  }, [activePost]);

  return (
    <View style={style.container}>
      <ScrollView contentContainerStyle={style.scrollViewContent}>
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
      </ScrollView>
    </View>
  );
};
export default PostComments;

const getStyles = () => {
  return StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
      backgroundColor: "black",
      paddingBottom: 224,
    },
    container: {
      flexGrow: 1,
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
  });
};
