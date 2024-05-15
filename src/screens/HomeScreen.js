import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Add your refresh logic here, e.g., fetch new data
    setTimeout(() => {
      setRefreshing(false);
    }, 2000); // Simulating a delay, replace with your actual refresh logic
  };

  const [posts, setPosts] = useState([
    { name: "Post1", id: 1 },
    { name: "Post2", id: 2 },
    { name: "Post3", id: 3 },
    { name: "Post4", id: 4 },
    { name: "Post5", id: 5 },
    { name: "Post6", id: 6 },
    { name: "Post7", id: 7 },
    { name: "Post8", id: 8 },
    { name: "Post9", id: 9 },
    { name: "Post10", id: 10 },
  ]);

  return (
    <View>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {posts.map((post) => (
          <View key={post.id} style={styles.postItem}>
            <Text>{post.name}</Text>
            <Text>ID: {post.id}</Text>
          </View>
        ))}
      </ScrollView>
      {/* {refreshing && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="tomato" />
        </View>
      )} */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  postItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  loader: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
});
