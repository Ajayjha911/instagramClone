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
    paddingVertical: 20,
    marginTop: 24,
    // paddingBottom: ,
    paddingHorizontal: 18,
    // height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
  },
  headerIcons: {
    paddingTop: 2,
    flexDirection: "row",
  },
  iconStyle: {
    paddingHorizontal: 20,
    marginTop: 1,
  },
});

export default Header;
