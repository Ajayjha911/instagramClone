import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { selectLoggedInUser } from "@redux/slices/appSlice";
import { setPostCommentsLikes } from "@redux/slices/postSlices";
import React, { useState } from "react";
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
  comments: any;
};

const PostComments: React.FC<PostCommentsProps> = ({ comments }) => {
  const dispatch = useAppDispatch();
  const style = getStyles();
  const activeUser = useAppSelector(selectLoggedInUser);
  const [comment, setComment] = useState("");

  const handleComment = () => {
    console.log("comment", comment);

    // dispatch(setPostCommentsLikes());
  };
  return (
    <View>
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
      <View style={{ flexDirection: "row" }}>
        <Image source={activeUser.profile_image} style={style.userNameImage} />
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="Add a comment..."
            multiline
            style={style.commentInput}
            onChangeText={(value) => setComment(value)}
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
    commentAuthor: {
      fontSize: 14,
      fontWeight: "700",
      color: "white",
    },
    comment: {
      fontSize: 14,
      color: "white",
    },
    userNameImage: {
      height: 35,
      width: 35,
      borderRadius: 100,
      alignSelf: "center",
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
