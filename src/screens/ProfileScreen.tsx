import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileComponent from "../../components/profile/profile";
import { USERS } from "data";

const ProfileScreen = () => {
  const loggedInUser = USERS[1];

  return <ProfileComponent isMyAccount={true} activeUser={loggedInUser} />;
};

export default ProfileScreen;

const styles = StyleSheet.create({});
