import React, { useState, useMemo } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActionSheetIOS,
  Pressable,
} from "react-native";
import styles from "./profile.style";
import Icon from "react-native-vector-icons/FontAwesome5";
import GridIcon from "react-native-vector-icons/MaterialIcons";

import LockIcon from "react-native-vector-icons/Ionicons";
import ThreadsIcon from "react-native-vector-icons/FontAwesome6";
import PlusIcon from "react-native-vector-icons/Feather";
import ElipseIcon from "react-native-vector-icons/AntDesign";

import { ScrollView } from "react-native-gesture-handler";
import { COLORS, SIZES, images } from "../../constants";
import ProfilePost from "./profile_post/profile-post";
import CustomButton from "../custom-button/custom-button";
import { Ionicons as ProfileIcon } from "@expo/vector-icons";

import { ProfilePageProps } from "./profile.types";

import { useAppSelector } from "@hooks/redux";
import { selectAllPosts } from "@redux/slices/postSlices";

import { useNavigation } from "@react-navigation/native";
import { getUserPost } from "@redux/slices/profileSlice";

const ProfileScreen: React.FC<ProfilePageProps> = ({
  isMyAccount,
  handleBack,
  activeUser,
}) => {
  const [activeTab, setActiveTab] = useState("posts");
  const UserPostpost = useAppSelector(getUserPost);

  const [showPostDetails, setShowPostDetails] = useState(false);
  const allPosts = useAppSelector(selectAllPosts);
  const UserPost = useAppSelector(getUserPost);

  const { activeUserPosts, postsLikedByLoggedInUser } = useMemo(() => {
    return {
      activeUserPosts: (allPosts || [])?.filter(
        (post) => post.user_id === activeUser?.id
      ),
      postsLikedByLoggedInUser: (allPosts || []).filter((post) =>
        post.likes.some((like) => like.user_id === activeUser?.id)
      ),
    };
  }, [allPosts, activeUser]);
  const navigation = useNavigation();
  const contentToDisplay = useMemo(
    () =>
      activeTab === "posts"
        ? activeUserPosts || []
        : postsLikedByLoggedInUser || [],
    [activeTab, activeUserPosts, postsLikedByLoggedInUser]
  );

  const handleActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          "Cancel",
          "Restrict",
          "Block",
          "Report",
          "About this account",
          "Share this profile",
        ],
        destructiveButtonIndex: [1, 2, 3],
        cancelButtonIndex: 0,
        userInterfaceStyle: "light",
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        }
      }
    );
  };

  const handlePostBack = () => {
    return navigation.goBack();
    // setShowPostDetails(false);
  };
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.rootContainer}>
      <React.Fragment>
        {isMyAccount ? (
          <View style={styles.profileHeader}>
            <TouchableOpacity style={styles.disUserName}>
              <LockIcon name="lock-closed-outline" size={16} color={"white"} />
              <Text style={styles.userNameText}>deepanshu__goyal</Text>
              <Icon name="chevron-down" size={16} color={"white"} />
            </TouchableOpacity>
            <View style={styles.profileIcons}>
              <ThreadsIcon name="threads" size={24} color={"white"} />
              <PlusIcon name="plus-square" solid size={24} color={"white"} />
              <Pressable
                onPress={() => {
                  //@ts-ignore
                  return navigation.navigate("selectLanguage");
                }}
              >
                <Icon name="bars" size={22} color={"white"} />
              </Pressable>
            </View>
          </View>
        ) : (
          <View style={styles.searchProfileContainer}>
            <TouchableOpacity onPress={handleBack && handleBack}>
              <ProfileIcon
                name="chevron-back-outline"
                size={24}
                color={"white"}
              />
            </TouchableOpacity>
            <Text style={styles.searchProfileText}>
              {activeUser?.user_name}
            </Text>
            <View style={styles.searchProfileIconContainer}>
              <ProfileIcon
                name="notifications-outline"
                size={24}
                style={{
                  paddingRight: 16,
                }}
                color={"white"}
              />
              <TouchableOpacity onPress={handleActionSheet}>
                <ElipseIcon name="ellipsis1" size={24} color={"white"} />
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={styles.profileContainer}>
          <View>
            <View style={styles.imageContainer}>
              <Image
                source={activeUser?.profile_image}
                resizeMode="contain"
                style={styles.image}
              />
            </View>
            <Text style={styles.profileName}>
              {activeUser?.display_name || "Deepanshu"}
            </Text>
          </View>

          <View style={styles.countContainer}>
            <View style={styles.detailContainer}>
              <Text style={styles.textValue}>{activeUserPosts?.length}</Text>
              <Text style={styles.textLabel}>posts</Text>
            </View>
            <TouchableOpacity style={styles.detailContainer}>
              <Text style={styles.textValue}>
                {activeUser.followers.length}
              </Text>
              <Text style={styles.textLabel}>followers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.detailContainer}>
              <Text style={styles.textValue}>
                {activeUser.following.length}
              </Text>
              <Text style={styles.textLabel}>following</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.bio}>{activeUser?.bio}</Text>

        <View style={styles.btnContainer}>
          <CustomButton
            title="Edit Profile"
            onClick={() => {
              //
              setIsVisible(true);
            }}
            backgroundColor="#e5e7eb"
            textColor="black"
            textWeight="600"
            feedbackOpacity={0.6}
          />
          <CustomButton
            title="Share Profile"
            onClick={() => {
              //
            }}
            backgroundColor="#e5e7eb"
            textColor="black"
            textWeight="600"
            feedbackOpacity={0.6}
          />
          <TouchableOpacity style={styles.addFollowerContainer}>
            <Icon name="user-plus" size={16} />
          </TouchableOpacity>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconBtnContainer("posts", activeTab)}
            onPress={() => setActiveTab("posts")}
          >
            <GridIcon name="grid-on" size={25} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtnContainer("reels", activeTab)}>
            <Icon name="video" size={25} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconBtnContainer("likes", activeTab)}
            onPress={() => setActiveTab("likes")}
          >
            <ProfileIcon name="person-circle-sharp" size={30} color={"white"} />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {UserPost.length ? (
              <TouchableOpacity style={styles.postContainer}>
                {UserPost.map((post) => (
                  <ProfilePost
                    key={post.id}
                    image={post?.img[0]?.img || post.img}
                    onPress={() => {
                      // setShowPostDetails(true);

                      // setIsVisible(true);
                      //@ts-ignore
                      navigation.navigate("ProfilePostView", {
                        activePosts: allPosts,
                        activeUser: activeUser,
                      });

                      // navigation.navigate("ViewPost", {
                      //   itemIndex: post.id,
                      //   data: UserPostpost,
                      // });
                    }}
                    // showActionBtn={activeTab === "posts"}
                    // showHeader={false}
                    // onPress={() => {
                    //   navigation.navigate("/profile/posts");
                    // }}
                  />
                ))}
              </TouchableOpacity>
            ) : (
              <View style={styles.noDataContainer}>
                <PlusIcon
                  name="camera"
                  size={50}
                  style={{ color: COLORS.gray2 }}
                />

                <Text style={{ fontSize: SIZES.medium, color: COLORS.white }}>
                  No Posts Yet
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </React.Fragment>
    </View>
  );
};

export default ProfileScreen;
