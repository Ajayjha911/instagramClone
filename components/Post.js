import React from "react";
import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Img1 from "../assets/img1.jpeg";
import Img2 from "../assets/img2.jpeg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";

const Posts = [
  {
    id: 1,
    img: Img1,
    username: "BlossomBelle",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
  {
    id: 2,
    img: Img2,
    username: "LavenderLuxe_",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
  {
    id: 3,
    img: Img3,
    username: "RosyRadiance_",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
  {
    id: 4,
    img: Img4,
    username: "DiamondDuchess_",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
  {
    id: 5,
    img: Img5,
    username: "CherryCharm_",
    likes: "13,393",
    comments: "433",
    date: "1 week ago",
  },
];

const InstaPost = () => {
  const renderItem = ({ item }) => (
    <View style={styles.postBackground} key={item.id}>
      <View style={styles.postHeader}>
        <View style={styles.postTitle}>
          <Image source={item.img} style={styles.profileImageStyle} />
          <View style={styles.userInfo}>
            <Text style={styles.usernameStyle}>{item.username}</Text>
            <Text style={styles.sponsoredText}>Sponsored</Text>
          </View>
        </View>
        <MaterialCommunityIcons name="dots-vertical" size={25} color="white" />
      </View>
      <Image source={item.img} style={styles.postImage} />
      <View style={styles.postFooter}>
        <View style={styles.postFooterIcons}>
          <View style={styles.postFooterActions}>
            <AntDesign
              name="hearto"
              size={25}
              color="black"
              style={styles.iconStyle}
            />
            <Feather
              name="message-circle"
              size={25}
              color="black"
              style={styles.commentIcon}
            />
            <Feather name="send" size={25} color="black" />
          </View>
          <FontAwesome name="bookmark-o" size={25} color="black" />
        </View>
        <Text style={styles.likeStyles}>{item.likes} likes</Text>
        <Text style={styles.captionSection}>
          <Text style={styles.captionUserStyle}>{item.username}</Text>
          <Text style={styles.caption}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt...
          </Text>
        </Text>
        <Text style={styles.viewComments}>
          View all {item.comments} comments
        </Text>
        <Text style={styles.postDate}>{item.date}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={Posts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  postBackground: {
    backgroundColor: "white",
    paddingBottom: 30,
  },
  profileImageStyle: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
  userInfo: {
    marginLeft: 8,
  },
  usernameStyle: {
    color: "black",
    fontSize: 13,
  },
  sponsoredText: {
    color: "gray",
    fontSize: 11,
  },
  postTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  postHeader: {
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: 320,
    marginVertical: 10,
  },
  postFooterActions: {
    flexDirection: "row",
  },
  iconStyle: {
    marginRight: 18,
    marginTop: 1,
  },
  commentIcon: {
    marginLeft: 5,
    marginRight: 20,
  },
  postFooterIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeStyles: {
    color: "black",
    marginTop: 8,
    fontSize: 13,
  },
  captionUserStyle: {
    color: "black",
    fontSize: 13,
    fontWeight: "800",
  },
  caption: {
    color: "black",
    fontSize: 13,
  },
  captionSection: {
    marginTop: 5,
  },
  postFooter: {
    paddingHorizontal: 18,
  },
  viewComments: {
    color: "gray",
    fontSize: 12,
    marginTop: 5,
  },
  postDate: {
    color: "gray",
    fontSize: 10,
    marginTop: 3,
  },
});

export default InstaPost;
