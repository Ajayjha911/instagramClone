import React, { useState, useMemo } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./profile.style";
import Icon from "react-native-vector-icons/FontAwesome5";
import GridIcon from "react-native-vector-icons/MaterialIcons";

import LockIcon from "react-native-vector-icons/Ionicons";
import ThreadsIcon from "react-native-vector-icons/FontAwesome6";
import PlusIcon from "react-native-vector-icons/Feather";

import { ScrollView } from "react-native-gesture-handler";
import { COLORS, SIZES, images } from "../../constants";
import { USERS, POSTS } from "../../data";
import ProfilePost from "./profile_post";
import CustomButton from "../custom-button/custom-button";
import { Ionicons as ProfileIcon } from "@expo/vector-icons";
import { ProfilePageProps } from "./profile.types";
// import { useNavigation } from "@react-navigation/native";

const loggedInUser = USERS[1];

const ProfileScreen: React.FC<ProfilePageProps> = ({ isMyAccount }) => {
  console.log("isMyAccount:", isMyAccount);
  const [activeTab, setActiveTab] = useState("posts");
  // const navigation = useNavigation();

  const { postsCreatedByLoggedInUser, postsLikedByLoggedInUser } =
    useMemo(() => {
      return {
        postsCreatedByLoggedInUser: (POSTS || [])?.filter(
          (post) => post.userId === loggedInUser?.id,
        ),
        postsLikedByLoggedInUser: (POSTS || []).filter((post) =>
          post.likes.some((like) => like.userId === loggedInUser?.id),
        ),
      };
    }, [POSTS, loggedInUser]);

  const contentToDisplay = useMemo(
    () =>
      activeTab === "posts"
        ? postsCreatedByLoggedInUser || []
        : postsLikedByLoggedInUser || [],
    [activeTab, postsCreatedByLoggedInUser, postsLikedByLoggedInUser],
  );

  return (
    <View style={styles.rootContainer}>
      <View style={styles.profileHeader}>
        <TouchableOpacity style={styles.disUserName}>
          <LockIcon name="lock-closed-outline" size={16} />
          <Text style={styles.userNameText}>deepanshu__goyal</Text>
          <Icon name="chevron-down" size={16} />
        </TouchableOpacity>
        <View style={styles.profileIcons}>
          <ThreadsIcon name="threads" size={24} />
          <PlusIcon name="plus-square" solid size={24} />
          <Icon name="bars" size={22} />
        </View>
      </View>
      <View style={styles.profileContainer}>
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={loggedInUser?.profile}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
          <Text style={styles.profileName}>Deepanshu Goyal</Text>
        </View>

        <View style={styles.countContainer}>
          <View style={styles.detailContainer}>
            <Text style={styles.textValue}>{loggedInUser.posts.length}</Text>
            <Text style={styles.textLabel}>posts</Text>
          </View>
          <TouchableOpacity style={styles.detailContainer}>
            <Text style={styles.textValue}>
              {loggedInUser.followers.length}
            </Text>
            <Text style={styles.textLabel}>followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailContainer}>
            <Text style={styles.textValue}>
              {loggedInUser.following.length}
            </Text>
            <Text style={styles.textLabel}>following</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.bio}>
        my bio my bio my bio my bio my bio my bio my bio my bio
        {/* {loggedInUser?.bio || "This is my bio!"} */}
      </Text>

      <View style={styles.btnContainer}>
        <CustomButton
          title="Edit Profile"
          onClick={() => {
            //
          }}
          backgroundColor="#e5e7eb"
          textColor="black"
          textWeight="600"
        />
        <CustomButton
          title="Share Profile"
          onClick={() => {
            //
          }}
          backgroundColor="#e5e7eb"
          textColor="black"
          textWeight="600"
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
          <GridIcon name="grid-on" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtnContainer("reels", activeTab)}>
          <Icon name="video" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconBtnContainer("likes", activeTab)}
          onPress={() => setActiveTab("likes")}
        >
          <ProfileIcon name="person-circle-sharp" size={30} />
        </TouchableOpacity>
      </View>

      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {contentToDisplay.length ? (
              <TouchableOpacity style={styles.postContainer}>
                {contentToDisplay.map((post) => (
                  <ProfilePost
                    key={post.id}
                    image={post.images[0]}
                    showActionBtn={activeTab === "posts"}
                    showHeader={false}
                    // onPress={() => {
                    //   navigation.navigate("/profile/posts");
                    // }}
                  />
                ))}
              </TouchableOpacity>
            ) : (
              <View style={styles.noDataContainer}>
                <Icon name="bug" size={100} style={{ color: COLORS.gray2 }} />

                <Text style={{ fontSize: SIZES.small, color: COLORS.gray }}>
                  {activeTab === "posts"
                    ? " Oops! No posts!."
                    : "Oops! No likes! "}
                </Text>
              </View>
            )}
          </View>
        </ScrollView>
      </>
    </View>
  );
};

export default ProfileScreen;
