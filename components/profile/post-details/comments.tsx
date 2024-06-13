import { PostType } from "@redux/slices/postSlices";
import React, { useEffect, useMemo, useRef } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

declare type PostCommentsProps = {
  posts: PostType[];
  selectedPostId: number;
};

const PostComments: React.FC<PostCommentsProps> = ({
  posts,
  selectedPostId,
}) => {
  const style = getStyles();

  const activePost = useMemo(() => {
    return posts?.find((post) => post.id === selectedPostId);
  }, [posts, selectedPostId]);

  const activeComments = useMemo(() => {
    const reversedArray = [...activePost?.comments]?.reverse();
    return reversedArray;
  }, [activePost]);

  const scrollViewRef = useRef(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  }, [activeComments?.length]);

  return (
    <View style={style.container}>
      <ScrollView
        contentContainerStyle={style.scrollViewContent}
        ref={scrollViewRef}
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
