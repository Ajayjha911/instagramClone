import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeNavigator from "./HomeNavigators";
import ChatScreen from "../screens/ChatScreen";
import NotificationScreen from "../screens/NotificationScreen";
import StoryUploadScreen from "../screens/StoryUploadScreen";
import ViewStoryScreen from "../screens/ViewStoryScreen";
import ViewPost from "@components/common/ViewPost";
import ProfilePostView from "@screens/profilePostView";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { Text } from "react-native";
import SelectLanguage from "@screens/SelectLanguage";
const prefix = Linking.createURL("/");
const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="HomeNavigation" component={HomeNavigator} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="StoryUploadScreen" component={StoryUploadScreen} />

      <Stack.Screen
        name="ViewStoryScreen"
        component={ViewStoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewPost"
        component={ViewPost}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="ProfilePostView" component={ProfilePostView} />
      <Stack.Screen
        name="selectLanguage"
        component={SelectLanguage}
        options={{ presentation: "modal", headerShown: true }}
      />
    </Stack.Navigator>
  );
}

//  to test deep linking use npx uri-scheme open "exp://10.151.0.175:8081/--/Post" --ios
const MainNavigator = () => {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        HomeNavigation: {
          screens: {
            Home: "Home",
            Search: "Search",
            Post: "Post",
            Reel: "Rell",
            Profile: "Profile",
          },
        },
        Chat: "Chat",
      },
    },
  };
  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text>Loading .....</Text>}
    >
      <StackNavigation />
    </NavigationContainer>
  );
};

export default MainNavigator;
