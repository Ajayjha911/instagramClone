import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const ConfirmStoryScreen = ({ route }) => {
  const navigation = useNavigation();
  const { image } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.icons}>
          <MaterialIcons name="text-fields" size={24} color="white" />
          <MaterialIcons name="insert-emoticon" size={24} color="white" />
          <Ionicons name="sparkles" size={24} color="white" />
          <Ionicons name="musical-notes" size={24} color="white" />
          <MaterialIcons name="more-horiz" size={24} color="white" />
        </View>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.footer}>
        <TouchableOpacity style={styles.storyButton}>
          <Image source={{ uri: image }} style={styles.storyIcon} />
          <Text style={styles.storyText}>Your story</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeFriendsButton}>
          <Ionicons name="ios-star" size={16} color="white" />
          <Text style={styles.closeFriendsText}>Close Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chevron-forward-circle" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "gray",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  storyButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  storyIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  storyText: {
    color: "white",
    marginLeft: 10,
  },
  closeFriendsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  closeFriendsText: {
    color: "white",
    marginLeft: 5,
  },
});

export default ConfirmStoryScreen;
