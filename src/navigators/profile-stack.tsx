import FollowerFollowingScreen from "@components/profile/post-details/follower-following";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "@screens/ProfileScreen";

import React from "react";

const ProfileStack: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        // options={{ title: "Profile", headerShown: false }}
      />
      <Stack.Screen
        name="followerfollowing"
        component={FollowerFollowingScreen}
        // options={{ title: "FollowerFollowing", headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default ProfileStack;
