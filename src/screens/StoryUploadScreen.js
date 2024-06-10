import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { selectStoryImage } from "../../src/redux/slices/storySlice";
import Icon from "react-native-vector-icons/Ionicons";

const StoryUploadScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [showUploadScreen, setShowUploadScreen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const test = async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access media library is required!");
        return;
      }

      const media = await MediaLibrary.getAssetsAsync({
        mediaType: "photo",
        first: 50,
      });
      setGalleryImages(media.assets);
    };
    test();
  }, []);

  const openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  const resolveAssetUri = async (id) => {
    const assetInfo = await MediaLibrary.getAssetInfoAsync(id);
    return assetInfo.localUri || assetInfo.uri;
  };

  const renderGalleryItem = async ({ item }) => (
    <TouchableOpacity
      onPress={async () => {
        const resolvedUri = await resolveAssetUri(item.id);
        setSelectedImage({ localUri: resolvedUri });
        setShowUploadScreen(true);
      }}
    >
      <Image
        source={{ uri: await resolveAssetUri(item.id) }}
        style={styles.galleryImage}
      />
    </TouchableOpacity>
  );

  const handleUploadStory = () => {
    if (selectedImage) {
      dispatch(selectStoryImage(selectedImage.localUri));
      navigation.goBack();
    }
  };

  if (showUploadScreen) {
    return (
      <View style={styles.uploadContainer}>
        <View style={styles.uploadHeader}>
          <TouchableOpacity onPress={() => setShowUploadScreen(false)}>
            <View style={styles.iconWrapper}>
              <Ionicons name="close" size={24} color="white" />
            </View>
          </TouchableOpacity>
          <View style={styles.uploadIcons}>
            <View style={styles.iconWrapper}>
              <Ionicons
                name="text"
                size={24}
                color="white"
                style={styles.icon}
              />
            </View>
            <View style={styles.iconWrapper}>
              <Ionicons
                name="happy"
                size={24}
                color="white"
                style={styles.icon}
              />
            </View>
            <View style={styles.iconWrapper}>
              <Ionicons
                name="musical-notes"
                size={24}
                color="white"
                style={styles.icon}
              />
            </View>
            <View style={styles.iconWrapper}>
              <Ionicons
                name="sparkles"
                size={24}
                color="white"
                style={styles.icon}
              />
            </View>
            <View style={styles.iconWrapper}>
              <Ionicons
                name="ellipsis-horizontal"
                size={24}
                color="white"
                style={styles.icon}
              />
            </View>
          </View>
        </View>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.fullImage}
        />
        <View style={styles.footerContainer}>
          <TouchableOpacity
            style={styles.yourStoryButton}
            onPress={handleUploadStory}
          >
            <View>
              <Image
                source={require("../../assets/img1.jpeg")}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.buttonText}>Your Story</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.closeFriends]}>
            <View style={styles.closeFriend}>
              <Icon
                name="star"
                size={18}
                style={styles.iconStyles2}
                color="white"
              />
            </View>
            <Text style={styles.buttonText}>Close friends</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={handleUploadStory}
          >
            <Icon
              name="arrow-forward"
              style={styles.iconStyles}
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.arrow}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.header}>Add to story</Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={openImagePickerAsync}>
          <Ionicons name="camera" size={40} color="white" />
          <Text style={styles.optionText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="save" size={40} color="white" />
          <Text style={styles.optionText}>Drafts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="images" size={40} color="white" />
          <Text style={styles.optionText}>Photos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="videocam" size={40} color="white" />
          <Text style={styles.optionText}>Videos</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.recentText}>Recents</Text>
      <FlatList
        data={galleryImages}
        renderItem={renderGalleryItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.galleryContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 16,
  },
  header: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  headerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  arrow: {
    marginTop: -14,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  option: {
    alignItems: "center",
  },
  optionText: {
    color: "white",
    marginTop: 8,
  },
  recentText: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
  },
  galleryContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  galleryImage: {
    width: 100,
    height: 100,
    margin: 5,
  },
  uploadContainer: {
    flex: 1,
    backgroundColor: "black",
  },
  uploadHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  uploadIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20, // Adjust the margin to create space between the cross icon and other icons
  },
  iconWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 10,
  },
  fullImage: {
    flex: 1,
    resizeMode: "contain",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 12,
  },
  arrowButton: {
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
  iconStyles: {
    marginTop: 9,
  },
  closeFriend: {
    borderRadius: 50,
    height: 30,
    width: 30,
    backgroundColor: "green",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
    marginTop: 4,
    fontWeight: "bold",
  },
  closeFriends: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 36,
  },
  yourStoryButton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#333",
    padding: 8,
    borderRadius: 36,
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 50,
  },
});

export default StoryUploadScreen;
