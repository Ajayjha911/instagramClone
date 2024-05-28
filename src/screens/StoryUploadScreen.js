import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { Ionicons } from "@expo/vector-icons";

const StoryUploadScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    (async () => {
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
    })();
  }, []);

  const openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };

  const renderGalleryItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedImage({ localUri: item.uri })}>
      <Image source={{ uri: item.uri }} style={styles.galleryImage} />
    </TouchableOpacity>
  );
  const navigations = useNavigation();

  const handleBack = () => {
    navigations.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerWrraper}>
        <TouchableOpacity onPress={handleBack} style={styles.arrow}>
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
      {selectedImage && (
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      )}
      <TouchableOpacity
        style={styles.selectButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.selectButtonText}>Select</Text>
      </TouchableOpacity>
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
  headerWrraper: {
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
  thumbnail: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginVertical: 20,
  },
  selectButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  selectButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default StoryUploadScreen;
