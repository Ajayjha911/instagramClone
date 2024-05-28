import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const ViewStoryScreen = ({ route, navigation }) => {
  const { story } = route.params;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          clearInterval(timer);
          navigation.goBack();
          return 1;
        }
        return prev + 0.01;
      });
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
      </View>
      <View style={styles.userInfo}>
        <Image source={story.img} style={styles.userAvatar} />
        <Text style={styles.modalUsername}>{story.username}</Text>
      </View>
      <Image source={story.img} style={styles.modalImage} />
      <View style={styles.bottomBar}>
        <TextInput
          placeholder="Send message"
          placeholderTextColor="#ffffff"
          style={styles.messageInput}
        />
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="favorite-border" size={32} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="paper-plane" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: "70%",
    resizeMode: "contain",
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "100%",
    position: "absolute",
    top: 10,
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  modalUsername: {
    color: "white",
    marginLeft: 10,
    fontSize: 16,
  },
  progressBarContainer: {
    height: 3,
    width: "100%",
    backgroundColor: "#555",
    position: "absolute",
    top: 0,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#fff",
  },
  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
    position: "absolute",
    bottom: 10,
  },
  messageInput: {
    flex: 1,
    color: "white",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 28,
    padding: 10,
    paddingHorizontal: 15,
  },
  sendButton: {
    marginLeft: 10,
  },
  sendButtonText: {
    color: "white",
    fontSize: 16,
  },
  iconButton: {
    marginLeft: 10,
  },
});

export default ViewStoryScreen;
