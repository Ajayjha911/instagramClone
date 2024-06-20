import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Carousel from "./common/Carousel";
import { useTranslation } from "react-i18next";

const InstaPost = ({ data, itemIndex = 1 }) => {
  const { t } = useTranslation();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

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
        <TouchableOpacity onPress={toggleModal}>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      </View>
      {Array.isArray(item.img) ? (
        <Carousel DATA={item.img} />
      ) : (
        <Image source={item.img} style={styles.postImage} />
      )}
      <View style={styles.postFooter}>
        <View style={styles.postFooterIcons}>
          <View style={styles.postFooterActions}>
            <AntDesign
              name="hearto"
              size={25}
              color="white"
              style={styles.iconStyle}
            />
            <Feather
              name="message-circle"
              size={25}
              color="white"
              style={styles.commentIcon}
            />
            <Feather name="send" size={25} color="white" />
          </View>
          <FontAwesome name="bookmark-o" size={25} color="white" />
        </View>
        <Text style={styles.likeStyles}>{item.likes} likes</Text>
        <Text style={styles.captionSection}>
          <Text style={styles.captionUserStyle}>{item.username}</Text>
          <Text style={styles.caption}>
            {t("data")}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt... */}
          </Text>
        </Text>
        <Text style={styles.viewComments}>
          View all {item.comments} comments
        </Text>
        <Text style={styles.postDate}>{item.date}</Text>
      </View>
    </View>
  );

  ////////////scroll logic

  const WIDTH = Dimensions.get("window").width;

  const flatListref = useRef(null);
  useEffect(() => {
    if (flatListref.current && itemIndex) {
      flatListref.current.scrollToIndex({ index: itemIndex - 1 });
    }
  }, []);

  const getItemLayout = (_, index) => {
    return {
      length: 500,
      offset: 500 * index,
      index,
    };
  };

  return (
    <>
      <FlatList
        ref={flatListref}
        initialScrollIndex={Number(itemIndex - 1)}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        getItemLayout={getItemLayout}
      />

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modal}
        swipeDirection={["down"]}
        onSwipeComplete={toggleModal}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHandle} />
          <View style={styles.modalIcons}>
            <View style={styles.modalIconWrapper}>
              <Feather name="bookmark" size={25} color="white" />
              <Text style={styles.modalIconText}>Save</Text>
            </View>
            <View style={styles.modalIconWrapper}>
              <MaterialCommunityIcons
                name="content-copy"
                size={25}
                color="white"
              />
              <Text style={styles.modalIconText}>Remix</Text>
            </View>
            <View style={styles.modalIconWrapper}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={25}
                color="white"
              />
              <Text style={styles.modalIconText}>QR Code</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.modalOption}>
            <MaterialCommunityIcons
              name="account-arrow-down-outline"
              size={25}
              color="white"
            />
            <Text style={styles.modalOptionText}>Unfollow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption}>
            <AntDesign name="exclamationcircleo" size={25} color="white" />
            <Text style={styles.modalOptionText}>
              Why you're seeing this post
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.modalOption}>
            <MaterialCommunityIcons name="eye-off" size={25} color="white" />
            <Text style={styles.modalOptionText}>Hide</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption}>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={25}
              color="white"
            />
            <Text style={styles.modalOptionText}>About this account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalOption}>
            <MaterialCommunityIcons name="email-alert" size={25} color="red" />
            <Text style={styles.modalReportOptionText}>Report</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  postBackground: {
    // paddingTop: 10,
    backgroundColor: "black",
    paddingBottom: 10,
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
    color: "white",
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
    paddingTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 10,
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
    color: "white",
    marginTop: 8,
    fontSize: 13,
  },
  captionUserStyle: {
    color: "white",
    fontSize: 13,
    fontWeight: "800",
  },
  caption: {
    color: "white",
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
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "black",
    padding: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  modalHandle: {
    width: 40,
    height: 5,
    backgroundColor: "gray",
    borderRadius: 4,
    marginBottom: 10,
  },
  modalIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  modalIconWrapper: {
    alignItems: "center",
  },
  modalIconText: {
    color: "white",
    marginTop: 5,
  },
  modalOption: {
    width: "100%",
    paddingVertical: 15,
    borderBottomColor: "gray",
    // borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  modalOptionText: {
    color: "white",
  },
  modalReportOptionText: {
    color: "red",
  },
});

export default InstaPost;
