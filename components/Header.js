import React from "react";
import { Image, StyleSheet, View } from "react-native";
import InstaLogo from "../assets/logo.png";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = () => {
  return (
    <View style={styles.headerBackground}>
      <Image source={InstaLogo} style={styles.logoStyle} />
      <View style={styles.headerIcons}>
        <AntDesign
          name="hearto"
          size={25}
          color="white"
          style={styles.iconStyle}
        />
        <Ionicons name="chatbubble-ellipses" size={25} color="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoStyle: {
    height: 32,
    width: 110,
  },
  headerBackground: {
    backgroundColor: "black",
    paddingTop: 10, // Adjusted to avoid status bar overlap
    paddingBottom: 10,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcons: {
    flexDirection: "row",
  },
  iconStyle: {
    paddingHorizontal: 20,
  },
});

export default Header;
