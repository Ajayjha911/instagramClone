import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

declare type PostCommentsProps = {
  comments: any;
};

const PostComments: React.FC<PostCommentsProps> = ({ comments }) => {
  const style = getStyles();
  return (
    <ScrollView style={{ padding: 16 }}>
      {comments?.map((comm, index) => {
        return (
          <View key={index}>
            <View>
              <Text style={style.commentAuthor}>anushka</Text>
              <Text style={style.comment}>nicee</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};
export default PostComments;

const getStyles = () => {
  return StyleSheet.create({
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
