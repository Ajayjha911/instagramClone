import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileComponent from "../../components/profile/profile";
import { useAppSelector } from "@hooks/redux";
import { selectLoggedInUser } from "@redux/slices/appSlice";

const ProfileScreen = () => {
  const loggedInUser = useAppSelector(selectLoggedInUser);

  return <ProfileComponent isMyAccount={true} activeUser={loggedInUser} />;
};

export default ProfileScreen;

const styles = StyleSheet.create({});
