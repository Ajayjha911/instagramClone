import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ReelScreen from "../screens/ReelScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
// import LoginScreen from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Reel" component={ReelScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
