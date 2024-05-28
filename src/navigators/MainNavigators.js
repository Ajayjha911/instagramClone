import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import HomeNavigator from "./HomeNavigators";
import ChatScreen from "../screens/ChatScreen";
import NotificationScreen from "../screens/NotificationScreen";
import StoryUploadScreen from "../screens/StoryUploadScreen";
import ConfirmStoryScreen from "../screens/ConfirmStoryScreen";
import ViewStoryScreen from "../screens/ViewStoryScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeNavigator} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="StoryUploadScreen" component={StoryUploadScreen} />
      <Stack.Screen name="ConfirmStoryScreen" component={ConfirmStoryScreen} />
      <Stack.Screen
        name="ViewStoryScreen"
        component={ViewStoryScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
