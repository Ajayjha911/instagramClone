import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import user1 from "../../assets/chat/user1.jpg";
import user2 from "../../assets/chat/user2.jpg";
import user3 from "../../assets/chat/user3.jpg";
import user4 from "../../assets/chat/user4.jpg";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const ChatScreen = () => {
  const navigation = useNavigation(); // Access navigation object

  const handleBack = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>test_user</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={25}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.noteSection}>
          <Image source={user1} style={styles.profileImage} />
          <View style={styles.noteTextContainer}>
            {/* <Text style={styles.noteText}>Note...</Text> */}
            <Text style={styles.noteSubText}>Your note</Text>
          </View>
        </View>
        <Text style={styles.messagesHeader}>Messages</Text>
        <View style={styles.messagesContainer}>
          <TouchableOpacity style={styles.messageItem}>
            <Image source={user2} style={styles.messageProfileImage} />
            <View style={styles.messageTextContainer}>
              <Text style={styles.messageUsername}>Tommy</Text>
              <Text style={styles.messageTimestamp}>Sent 18m ago</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageItem}>
            <Image source={user3} style={styles.messageProfileImage} />
            <View style={styles.messageTextContainer}>
              <Text style={styles.messageUsername}>Jerry</Text>
              <Text style={styles.messageTimestamp}>
                Sent a reel by mithilasach... 4d
              </Text>
            </View>
            <Ionicons name="camera" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageItem}>
            <Image source={user4} style={styles.messageProfileImage} />
            <View style={styles.messageTextContainer}>
              <Text style={styles.messageUsername}>Big Brain</Text>
              <Text style={styles.messageTimestamp}>
                Neeraj Walia: Bhai aag lgani h angrej... 6d
              </Text>
            </View>
            <Ionicons name="camera" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageItem}>
            <Image source={user3} style={styles.messageProfileImage} />
            <View style={styles.messageTextContainer}>
              <Text style={styles.messageUsername}>Tom</Text>
              <Text style={styles.messageTimestamp}>
                Sent a reel by hindi_humor... 1w
              </Text>
            </View>
            <Ionicons name="camera" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.messageItem}>
            <Image source={user1} style={styles.messageProfileImage} />
            <View style={styles.messageTextContainer}>
              <Text style={styles.messageUsername}>Jack</Text>
              <Text style={styles.messageTimestamp}>
                Reacted 😂 to your message... 2w
              </Text>
            </View>
            <Ionicons name="camera" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: "white",
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  noteSection: {
    flexDirection: "column",
    justifyContent: "flex-start",
    // alignItems: "center",
    paddingVertical: 10,
  },
  profileImage: {
    width: 60, // Increased size for closer match
    height: 60, // Increased size for closer match
    borderRadius: 30, // Half of the width/height for rounded corners
    marginRight: 10,
    borderWidth: 2, // Adding border to match the example
    borderColor: "gray", // Border color
  },
  noteTextContainer: {
    flex: 1,
  },
  noteText: {
    color: "gray",
    fontSize: 16,
  },
  noteSubText: {
    color: "gray",
    fontSize: 14,
  },
  messagesHeader: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20, // Adjusted margin to remove line effect
  },
  messagesContainer: {
    // No border styles here
  },
  messageItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  messageProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageTextContainer: {
    flex: 1,
  },
  messageUsername: {
    color: "white",
    fontSize: 16,
  },
  messageTimestamp: {
    color: "gray",
    fontSize: 14,
  },
});

export default ChatScreen;
