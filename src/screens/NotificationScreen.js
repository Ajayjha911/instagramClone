import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import user1 from "../../assets/chat/user1.jpg";
import user2 from "../../assets/chat/user2.jpg";
import user3 from "../../assets/chat/user3.jpg";
import user4 from "../../assets/chat/user4.jpg";

const notifications = [
  {
    id: 1,
    type: "followRequest",
    user: "aabvc_f445",
    others: 2,
    time: "1w",
    avatar: user1,
  },
  {
    id: 2,
    type: "suggestion",
    user: "gonsonqueenvictoria",
    time: "4d",
    avatar: user2,
  },
  { id: 3, type: "like", user: "jack", time: "5d", avatar: user3 },
  { id: 4, type: "follow", user: "rc0511011", time: "1w", avatar: user4 },
  {
    id: 5,
    type: "like",
    user: "freak_treat_______",
    others: ["jack", "tom"],
    time: "1w",
    avatar: user3,
  },
];

const NotificationScreen = () => {
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
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>
      <ScrollView style={styles.notificationsContainer}>
        <View style={styles.followRequestItem}>
          <Image source={user1} style={styles.avatar} />
          <View style={styles.notificationContent}>
            <Text style={styles.notificationText}>
              <Text style={styles.userName}>Follow Request</Text>
              <Text style={styles.userName}>aabvc_f445</Text> + 2 others
            </Text>
            <Text style={styles.timeText}>{notifications[0].time}</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Last 7 Days</Text>
        {notifications.slice(1).map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            <Image source={notification.avatar} style={styles.avatar} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationText}>
                {notification.type === "suggestion" && (
                  <>
                    <Text style={styles.userName}>{notification.user}</Text>
                    <Text>, who you might know, is on Instagram.</Text>
                  </>
                )}
                {notification.type === "like" && (
                  <>
                    <Text style={styles.userName}>{notification.user}</Text>
                    <Text> liked your story.</Text>
                  </>
                )}
                {notification.type === "follow" && (
                  <>
                    <Text style={styles.userName}>{notification.user}</Text>
                    <Text> started following you.</Text>
                  </>
                )}
              </Text>
              <Text style={styles.timeText}>{notification.time}</Text>
            </View>
            {notification.type === "suggestion" && (
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followButtonText}>Follow</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  header: {
    padding: 15,
    backgroundColor: "black",
    // borderBottomWidth: 1,
    borderBottomColor: "#333",
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
  },
  notificationsContainer: { flex: 1, padding: 10 },
  sectionTitle: { color: "white", fontSize: 16, marginVertical: 10 },
  followRequestItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    // borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    // borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  notificationContent: { flex: 1 },
  notificationText: {
    color: "white",
    fontSize: 16,
    flexDirection: "column",
    display: "flex",
  },
  userName: { fontWeight: "bold" },
  timeText: { color: "#888", fontSize: 12 },
  followButton: {
    backgroundColor: "#1c7ed6",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  followButtonText: { color: "white" },
});

export default NotificationScreen;
