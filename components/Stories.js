import React, { useState, useEffect } from "react";
import {
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch, useSelector } from "react-redux";
import {
  resetStoryImage,
  addViewedStory,
} from "../src/redux/slices/storySlice";
import Img1 from "../assets/img1.jpeg";
import Img2 from "../assets/img2.jpeg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";

const Stories = () => {
  const [viewed, setViewed] = useState([]);
  const [tempStory, setTempStory] = useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const story = useSelector((state) => state.story);

  const yourStory = [
    {
      id: 1,
      img: story.story.storyImage ? [{ uri: story.story.storyImage }] : [Img4],
      username: "test",
      timestamp: story.story.timestamp,
    },
  ];
  const stories = [
    {
      id: 2,
      img: [Img1],
      username: "jolly67",
      timestamp: Date.now() - 3600000,
    },
    {
      id: 3,
      img: [Img2, Img5],
      username: "test6",
      timestamp: Date.now() - 7200000,
    },
    { id: 4, img: [Img3], username: "jam09", timestamp: Date.now() - 10800000 },
    {
      id: 5,
      img: [Img5],
      username: "hvgv_hbjb",
      timestamp: Date.now() - 14400000,
    },
  ];

  // Separate and sort the stories
  const unviewedStories = stories.filter(
    (item) =>
      !story.story.viewedStories.some(
        (viewedStory) =>
          viewedStory.id === item.id &&
          Date.now() - viewedStory.timestamp < 24 * 60 * 60 * 1000
      )
  );

  const viewedStories = stories.filter((item) =>
    story.story.viewedStories.some(
      (viewedStory) =>
        viewedStory.id === item.id &&
        Date.now() - viewedStory.timestamp < 24 * 60 * 60 * 1000
    )
  );

  const sortedStories = [...yourStory, ...unviewedStories, ...viewedStories];

  useEffect(() => {
    if (story.timestamp) {
      const timeElapsed = Date.now() - story.timestamp;
      const remainingTime = 24 * 60 * 60 * 1000 - timeElapsed;
      if (remainingTime > 0) {
        const timer = setTimeout(() => {
          dispatch(resetStoryImage());
        }, remainingTime);
        return () => clearTimeout(timer);
      } else {
        dispatch(resetStoryImage());
      }
    }
  }, [story, dispatch]);

  useEffect(() => {
    let timer;
    if (tempStory) {
      timer = setTimeout(() => {
        setTempStory(null);
      }, 8000); // 8 seconds
    }
    return () => clearTimeout(timer);
  }, [tempStory]);

  const renderStoryItem = ({ item }) => {
    const isYourStory = yourStory.some((story) => story.id === item.id);
    const displayImage =
      tempStory && isYourStory ? { uri: tempStory } : item.img[0]; // Display first image as preview
    const storyViewed = story?.story?.viewedStories?.some(
      (viewedStory) =>
        viewedStory.id === item.id &&
        Date.now() - viewedStory.timestamp < 24 * 60 * 60 * 1000
    );

    return (
      <TouchableOpacity
        style={styles.stories}
        onPress={() => {
          if (!storyViewed) {
            if (isYourStory && !story.story.storyImage) {
              navigation.navigate("StoryUploadScreen", {
                onUpload: (imageUri) => setTempStory(imageUri),
              });
            } else {
              setViewed([...viewed, item.id]);
              dispatch(addViewedStory({ id: item.id, timestamp: Date.now() }));
              navigation.navigate("ViewStoryScreen", { story: item });
            }
          } else {
            navigation.navigate("ViewStoryScreen", { story: item });
          }
        }}
      >
        <View>
          <LinearGradient
            colors={
              storyViewed
                ? ["transparent", "transparent"]
                : !storyViewed && isYourStory && !story.story.storyImage
                ? ["transparent", "transparent"]
                : ["#feda75", "#fa7e1e", "#d62976", "#962fbf"]
            }
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={styles.gradient}
          >
            <Image source={displayImage} style={styles.imageStyle} />
          </LinearGradient>
          {isYourStory && (
            <AntDesign
              name="pluscircle"
              size={16}
              color="#2A93D5"
              style={styles.iconStyle}
            />
          )}
        </View>

        <Text style={styles.usernameStyle}>
          {isYourStory ? "Your Story" : item.username}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.storiesContainer}
    >
      <FlatList
        data={sortedStories}
        renderItem={renderStoryItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  storiesContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  stories: {
    alignItems: "center",
    marginHorizontal: 5,
    paddingBottom: 10,
  },
  gradient: {
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    height: 65,
    width: 65,
    borderRadius: 32.5,
    borderWidth: 2,
    borderColor: "white",
  },
  yourStory: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  iconStyle: {
    position: "absolute",
    bottom: -4,
    right: -4,
  },
  usernameStyle: {
    color: "white",
    marginTop: 5,
    fontSize: 12,
  },
});

export default Stories;
