import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import styles from "./add_post.style";
import { SIZES, images } from "../../constants";
import ProfilePost from "../profile/profile_post/profile-post";
import {
  launchImageLibraryAsync,
  getMediaLibraryPermissionsAsync,
} from "expo-image-picker";
import { ScrollView } from "react-native-gesture-handler";
import SelectImage from "./selectImage";
import SharePost from "./sharePost";

const AddPost = () => {
  const [postScreen, setPostScreen] = useState("selectPost");
  const allImages = Object.entries(images).map(([key, value]) => ({
    key,
    value,
  }));
  const screenWidth = useWindowDimensions().width;
  const [postDetails, setPostDetails] = useState({
    title: "",
    description: "",
    images: [],
  });

  const handleOnChange = (name, text) => {
    setPostDetails((prev) => ({ ...prev, [name]: text }));
  };

  const handleOnImageChange = (image) => {
    const isSelected = postDetails.images.includes(image);

    setPostDetails((prev) => ({
      ...prev,
      images: !isSelected
        ? [...prev.images, image]
        : prev.images.filter((itm) => itm !== image),
    }));
  };

  const handleOnSelectFile = () => {
    const options = {
      mediaTypes: "Images",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };
    launchImageLibraryAsync(options)
      .then((response) => {
        if (response.canceled) {
          console.log("User Cancelled image picker");
        } else if (response.error) {
          console.log("Image picker error", response.error);
        } else {
          let imageUrl = response.uri || result.assets[0].uri;
          setPostDetails((prev) => ({
            ...prev,
            images: [...prev.images, imageUrl],
          }));
        }
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      {postScreen === "selectPost" ? (
        <SelectImage
          allImages={allImages}
          postDetails={postDetails}
          handleOnImageChange={handleOnImageChange}
          onNext={(scr) => setPostScreen(scr)}
        />
      ) : (
        <SharePost
          allImages={allImages}
          postDetails={postDetails}
          handleOnImageChange={handleOnImageChange}
          onBack={(scr) => setPostScreen(scr)}
          onTextChange={handleOnChange}
        />
      )}
    </SafeAreaView>
  );
};

export default AddPost;
