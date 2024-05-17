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
import { ScrollView } from "react-native-gesture-handler";
import { COLORS, SIZES, images } from "../../constants";
import { USERS, POSTS } from "../../data";
import ProfilePost from "./profile_post";

const loggedInUser = USERS[1];

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const { postsCreatedByLoggedInUser, postsLikedByLoggedInUser } =
    useMemo(() => {
      return {
        postsCreatedByLoggedInUser: (POSTS || [])?.filter(
          (post) => post.userId === loggedInUser?.id
        ),
        postsLikedByLoggedInUser: (POSTS || []).filter((post) =>
          post.likes.some((like) => like.userId === loggedInUser?.id)
        ),
      };
    }, [POSTS, loggedInUser]);

  const contentToDisplay = useMemo(
    () =>
      activeTab === "posts"
        ? postsCreatedByLoggedInUser || []
        : postsLikedByLoggedInUser || [],
    [activeTab, postsCreatedByLoggedInUser, postsLikedByLoggedInUser]
  );

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={loggedInUser?.profile}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.countContainer}>
          <View style={styles.detailContainer}>
            <Text style={styles.textLabel}>Posts</Text>
            <Text style={styles.textValue}>{loggedInUser.posts.length}</Text>
          </View>
          <TouchableOpacity style={styles.detailContainer}>
            <Text style={styles.textLabel}>Followers</Text>
            <Text style={styles.textValue}>
              {loggedInUser.followers.length}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.detailContainer}>
            <Text style={styles.textLabel}>Following</Text>
            <Text style={styles.textValue}>
              {loggedInUser.following.length}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bioContainer}>
        <Text>{loggedInUser?.name}</Text>
        <Text>{loggedInUser?.bio || "This is my bio!"}</Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.iconBtnText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.iconBtnText}>Share Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addFollowerContainer}>
          <Icon name="user-plus" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconBtnContainer("posts", activeTab)}
          onPress={() => setActiveTab("posts")}
        >
          <Icon name="list" size={25} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconBtnContainer("likes", activeTab)}
          onPress={() => setActiveTab("likes")}
        >
          <Icon name="heart" size={25} solid />
        </TouchableOpacity>
      </View>

      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            {contentToDisplay.length ? (
              <View style={styles.postContainer}>
                {contentToDisplay.map((post) => (
                  <ProfilePost
                    key={post.id}
                    post={post}
                    showActionBtn={activeTab === "posts"}
                    showHeader={false}
                  />
                ))}
              </View>
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
    </SafeAreaView>
  );
};

export default ProfileScreen;
