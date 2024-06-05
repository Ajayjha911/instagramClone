import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileComponent from "../../components/profile/profile";

const ProfileScreen = ({ navigation }) => {
  return <ProfileComponent navigation={navigation} />;
};

export default ProfileScreen;

const styles = StyleSheet.create({});
