import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";

declare type ProfileHeaderProps = {
  handleBack: () => void;
  title: string;
};

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ handleBack, title }) => {
  const style = getStyles();

  return (
    <View style={style.headerContainer}>
      <TouchableOpacity onPress={handleBack} activeOpacity={1}>
        <Icon name="chevron-back" size={24} color="white" />
      </TouchableOpacity>
      <Text style={style.headerText}>{title}</Text>
    </View>
  );
};
export default ProfileHeader;

const getStyles = () => {
  return StyleSheet.create({
    headerContainer: {
      backgroundColor: "black",
      height: 30,
      flexDirection: "row",
    },
    headerText: {
      color: "white",
      textAlign: "center",
      flex: 1,
      paddingRight: 40,
      fontSize: 16,
      fontWeight: "bold",
    },
  });
};
