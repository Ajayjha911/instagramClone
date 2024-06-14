import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions, FlatList, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';
import React, { useRef, useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Avatar from '@components/avatar/avatar';
import Modal from 'react-native-modal';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height - 70;

export default function ReelScreen() {
  const videoRefs = useRef([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const [isCommentModalVisible, setCommentModalVisible] = useState(false);

  const data = [
    { id: 1, title: 'First Video', caption: 'This is the first video caption', uri: require('./video/video1.mp4') },
    { id: 2, title: 'Second Video', caption: 'This is the second video caption', uri: require('./video/video2.mp4') },
    { id: 3, title: 'Third Video', caption: 'This is the third video caption', uri: require('./video/video1.mp4') },
  ];

  useEffect(() => {
    const loadVideo = async () => {
      if (videoRefs.current[currentVideoIndex]) {
        await videoRefs.current[currentVideoIndex].loadAsync(data[currentVideoIndex].uri, {}, true);
        await videoRefs.current[currentVideoIndex].playAsync();
      }
    };
    loadVideo();
  }, [currentVideoIndex]);

  const handleScroll = async (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.y / SCREEN_HEIGHT);
    if (index !== currentVideoIndex) {
      if (videoRefs.current[currentVideoIndex]) {
        await videoRefs.current[currentVideoIndex].unloadAsync();
      }
      setCurrentVideoIndex(index);
    }
  };

  const handleMuteToggle = async (index) => {
    const isMuted = videoRefs.current[index].props.isMuted;
    await videoRefs.current[index].setIsMutedAsync(!isMuted);
  };

  const handleCommentPress = () => {
    setCommentModalVisible(true);
  };

  const closeCommentModal = () => {
    setCommentModalVisible(false);
  };

  const renderVideo = ({ item, index }) => (
    <View style={styles.container} key={item.id}>
      <TouchableOpacity onPress={() => handleMuteToggle(index)} style={styles.videoContainer}>
        <Video
          ref={(ref) => { videoRefs.current[index] = ref; }}
          style={styles.video}
          source={item.uri}
          resizeMode="stretch"
          isLooping
        />
      </TouchableOpacity>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Avatar height={25} width={25} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={styles.caption}>{item.caption}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="heart-outline" size={36} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={handleCommentPress}>
            <Ionicons name="chatbubble-outline" size={36} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="send-outline" size={36} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );

  const renderComments = () => (
    <Modal
      isVisible={isCommentModalVisible}
      onBackdropPress={closeCommentModal}
      style={styles.bottomModal}
    >
      <View style={styles.modalContent}>
        <Text style={styles.modalTitle}>Comments</Text>
        <FlatList
          data={[{ id: 1, username: 'User1', comment: 'Nice video!' }, { id: 2, username: 'User2', comment: 'Amazing content!' }]}
          renderItem={({ item }) => (
            <View style={styles.commentContainer}>
              <Avatar height={25} width={25} />
              <View style={styles.commentTextContainer}>
                <Text style={styles.commentUsername}>{item.username}</Text>
                <Text style={styles.commentText}>{item.comment}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </Modal>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        renderItem={renderVideo}
        keyExtractor={item => item.id.toString()}
        pagingEnabled
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        getItemLayout={(data, index) => (
          { length: SCREEN_HEIGHT, offset: SCREEN_HEIGHT * index, index }
        )}
      />
      {renderComments()}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  video: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  caption: {
    color: 'grey',
    fontSize: 14,
    marginBottom: 20,
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 20,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', 
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  commentTextContainer: {
    marginLeft: 10,
  },
  commentUsername: {
    fontWeight: 'bold',
  },
  commentText: {
    color: 'grey',
  },
});
