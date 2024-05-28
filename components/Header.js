import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import InstaLogo from "../assets/logo.png";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerBackground}>
      <Image source={InstaLogo} style={styles.logoStyle} />
      <View style={styles.headerIcons}>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <AntDesign
            name="hearto"
            size={25}
            color="white"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons name="chatbubble-ellipses" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logoStyle: {
    height: 32,
    width: 110,
  },
  headerBackground: {
    backgroundColor: "black",
    paddingTop: 10,
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
