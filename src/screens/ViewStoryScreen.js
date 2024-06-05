import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
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
import * as Progress from "react-native-progress";
import Modal from "react-native-modal";
import { useDispatch } from "react-redux";
import { addViewedStory } from "../redux/slices/storySlice";

const ViewStoryScreen = ({ route, navigation }) => {
  const { story } = route.params;
  const [progress, setProgress] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const progressRef = useRef(progress);
  const dispatch = useDispatch();

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useLayoutEffect(() => {
    let startTime = null;

    const updateProgress = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed >= 80) {
        setProgress((prev) => {
          const newProgress = prev + 0.01;
          if (newProgress >= 1) {
            if (currentImageIndex < story.img.length - 1) {
              setCurrentImageIndex((prevIndex) => prevIndex + 1);
              setProgress(0);
            } else {
              navigation.goBack();
            }
            return 0;
          }
          return newProgress;
        });
        startTime = timestamp;
      }

      if (progressRef.current < 1) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);

    return () => {
      setProgress(0);
    };
  }, [navigation, currentImageIndex, story.img.length]);

  useLayoutEffect(() => {
    dispatch(addViewedStory({ id: story.id, timestamp: Date.now() }));
  }, [dispatch, story.id]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const getTimeDifference = (timestamp) => {
    const now = Date.now();
    const difference = now - timestamp;

    if (difference < 60000) {
      return `${Math.floor(difference / 1000)} sec ago`;
    } else if (difference < 3600000) {
      return `${Math.floor(difference / 60000)} min ago`;
    } else if (difference < 86400000) {
      return `${Math.floor(difference / 3600000)} hr ago`;
    } else {
      return `${Math.floor(difference / 86400000)} days ago`;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        {story.img.map((_, index) => (
          <Progress.Bar
            key={index}
            progress={
              index === currentImageIndex
                ? progress
                : index < currentImageIndex
                ? 1
                : 0
            }
            width={null}
            color="#fff"
            unfilledColor="#555"
            borderWidth={0}
            height={3}
            style={styles.progressBar}
          />
        ))}
      </View>
      <View style={styles.userInfo}>
        <Image
          source={story.img[currentImageIndex]}
          style={styles.userAvatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.modalUsername}>{story.username}</Text>
          <Text style={styles.timestampStyle}>
            {getTimeDifference(story.timestamp)}
          </Text>
        </View>
        <TouchableOpacity onPress={toggleModal} style={styles.moreIcon}>
          <MaterialIcons name="more-vert" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <Image source={story.img[currentImageIndex]} style={styles.modalImage} />
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
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.modalItem}>
            <Text style={styles.modalText1}>Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalItem}>
            <Text style={styles.modalText}>Mute</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  textContainer: {
    marginLeft: 10,
  },
  modalUsername: {
    color: "white",
    fontSize: 16,
  },
  timestampStyle: {
    color: "gray",
    fontSize: 12,
  },
  progressContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  progressBar: {
    flex: 1,
    marginHorizontal: 2,
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
  iconButton: {
    marginLeft: 10,
  },
  moreIcon: {
    marginLeft: "auto",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "black",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalItem: {
    paddingVertical: 15,
  },
  modalText: {
    fontSize: 18,
    color: "white",
  },
  modalText1: {
    fontSize: 18,
    color: "red",
  },
});

export default ViewStoryScreen;
