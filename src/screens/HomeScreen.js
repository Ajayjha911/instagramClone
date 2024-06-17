import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  Appearance,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import InstaStories from "../../components/Stories";
import InstaPost from "../../components/Post";
import { Posts } from "data";

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  const localColorScheme = Appearance.getColorScheme();
  // const color = useColorScheme();
  console.log("color", localColorScheme);

  // const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  // console.log("color", colorScheme);
  // useEffect(() => {
  //   const subscription = Appearance.addChangeListener(({ colorScheme }) => {
  //     setColorScheme(colorScheme);
  //   });

  //   // Cleanup the subscription on unmount
  //   return () => subscription.remove();
  // }, []);

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <InstaStories />
        <InstaPost data={Posts} itemIndex={1} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "black",
  },
  scrollView: {
    flexGrow: 1,
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
