import React from "react";
import {
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import Img1 from "../assets/img1.jpeg";
import Img2 from "../assets/img2.jpeg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";

const stories = [
  {
    id: 1,
    img: Img1,
    username: "jolly67",
  },
  {
    id: 2,
    img: Img2,
    username: "jolly67",
  },
  {
    id: 3,
    img: Img3,
    username: "jolly67",
  },
  {
    id: 4,
    img: Img4,
    username: "jolly67",
  },
  {
    id: 5,
    img: Img5,
    username: "jolly67",
  },
];

const Stories = () => {
  const renderStoryItem = ({ item, index }) => (
    <View style={styles.stories}>
      {index === 0 ? (
        <View>
          <Image source={item.img} style={styles.yourStory} />
          <AntDesign
            name="pluscircle"
            size={16}
            color="#2A93D5"
            style={styles.iconStyle}
          />
          <Text style={styles.usernameStyle}>Your story</Text>
        </View>
      ) : (
        <LinearGradient
          colors={["#feda75", "#fa7e1e", "#d62976", "#962fbf"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={styles.gradient}
        >
          <Image source={item.img} style={styles.imageStyle} />
        </LinearGradient>
      )}
      {index !== 0 && <Text style={styles.usernameStyle}>{item.username}</Text>}
    </View>
  );

  return (
    <ScrollView horizontal>
      <FlatList
        horizontal
        data={stories}
        renderItem={({ item, index }) => renderStoryItem({ item, index })}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.headerBackground}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 18,
    height: 130,
  },
  yourStory: {
    height: 72,
    width: 72,
    borderRadius: 50,
    marginTop: 5,
    borderWidth: 4,
    borderColor: "black",
  },
  imageStyle: {
    height: 72,
    width: 72,
    borderWidth: 4,
    borderColor: "black",
    borderRadius: 50,
    alignSelf: "center",
  },
  gradient: {
    height: 77,
    width: 77,
    borderRadius: 50,
    justifyContent: "center",
    alignSelf: "center",
  },
  stories: {
    alignItems: "center",
    marginRight: 15,
    position: "relative",
  },
  usernameStyle: {
    color: "white",
    marginTop: 8,
    fontSize: 13,
  },
  iconStyle: {
    position: "absolute",
    top: 58,
    left: 50,
    backgroundColor: "white",
    borderRadius: 50,
  },
});

export default Stories;