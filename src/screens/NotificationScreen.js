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
import { notifications } from "../../data";
import user1 from "../../assets/chat/user1.jpg";

const NotificationScreen = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
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
            </Text>
            <Text style={styles.notificationText}>
              <Text style={styles.userName}>aabvc_f445</Text> + 2 others
            </Text>
            <Text style={styles.timeText}>{notifications[0].time}</Text>
          </View>
          <Ionicons
            name="chevron-forward"
            size={24}
            color="white"
            style={styles.chevronIcon}
          />
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
    borderBottomColor: "#333",
  },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
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
  chevronIcon: { marginLeft: 10 },
});

export default NotificationScreen;
