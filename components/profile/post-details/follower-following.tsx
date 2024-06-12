import {
  RouteProp,
  useNavigation,
  useNavigationState,
  useRoute,
} from "@react-navigation/native";
import React, { useMemo } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CustomButton from "@components/custom-button/custom-button";
import { emptyFunc } from "@helpers/func";
import images from "@constants/images";
import ProfileHeader from "@components/header/header";

declare type RoutePropsType = {
  details: {
    value: "followers" | "following";
  };
};

type BlogDetailRouteProp = RouteProp<RoutePropsType, "details">;

const FollowerFollowingScreen: React.FC = () => {
  const route = useRoute<BlogDetailRouteProp>();
  const { value } = route.params;

  const Tab = createMaterialTopTabNavigator();
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <ProfileHeader handleBack={handleBack} />
      <Tab.Navigator
        initialRouteName={value}
        screenOptions={{
          swipeEnabled: true,
          tabBarScrollEnabled: true,
          tabBarStyle: {
            backgroundColor: "black",
          },
          tabBarLabelStyle: {
            fontSize: 16,
            color: "white",
            textTransform: "none",
          },
          tabBarIndicatorStyle: {
            backgroundColor: "white",
            height: 1,
          },
        }}
      >
        <Tab.Screen
          name={`5 Followers`}
          component={FollowerFollowing}
          listeners={{
            tabPress: () => console.log("tab pressed"),
          }}
        />
        <Tab.Screen name={`7 Following`} component={FollowerFollowing} />
      </Tab.Navigator>
    </>
  );
};

const FollowerFollowing = () => {
  const navigationState = useNavigationState((state) => state); // Get navigation state
  const currentRouteName = navigationState.routes[navigationState.index].name;
  const isTabFollower = useMemo(() => {
    return currentRouteName.includes("Followers") ? true : false;
  }, [currentRouteName]);

  const style = getStyles();
  const users = [
    {
      id: "1",
      display_name: "Ajay Kumar",
      user_name: "__ajay_kumar",
      profile_image: images.profile1,
    },
    {
      id: "4",
      display_name: "Rajesh",
      user_name: "rajesh_de_",
      profile_image: images.profile1,
    },
    {
      id: "3",
      display_name: "Nischit Shetty",
      user_name: "nischit_shetty",
      profile_image: images.profile1,
    },
    {
      id: "5",
      display_name: "John Doe",
      user_name: "doe_john_90",
      profile_image: images.profile1,
    },
    {
      id: "2",
      display_name: "Pankaj Kumar",
      user_name: "_pankaj_kumar",
      profile_image: images.profile1,
    },
  ];
  return (
    <View style={style.container}>
      <Text style={style.followerHeaderText}>
        {isTabFollower ? "All Followers" : "Sort by"}
      </Text>
      <ScrollView>
        {users?.map((user, index) => {
          return (
            <View style={style.listContainer} key={index}>
              <View style={style.listInnerContainer}>
                <Image
                  source={user?.profile_image}
                  style={style.profileImage}
                />
                <View style={style.nameContainer}>
                  <Text style={[style.userNameText, style.nameTextColor]}>
                    {user?.user_name}
                  </Text>
                  <Text style={style.nameTextColor}>{user?.display_name}</Text>
                </View>
              </View>

              <CustomButton
                title={isTabFollower ? "Remove" : "Following"}
                onClick={emptyFunc}
                width={80}
                padding={4}
                backgroundColor="gray"
                textSize={14}
                feedbackOpacity={1}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingRight: 8,
      paddingLeft: 8,
      backgroundColor: "black",
    },
    headerContainer: {
      backgroundColor: "black",
      height: 30,
      flexDirection: "row",
    },
    headerText: {
      color: "white",
      textAlign: "center",
      flex: 1,
      paddingRight: 40,
      fontSize: 16,
      fontWeight: "bold",
    },
    followerHeaderText: {
      fontWeight: "700",
      fontSize: 16,
      paddingBottom: 24,
      color: "white",
      paddingTop: 16,
    },
    profileImage: {
      height: 45,
      width: 45,
      borderRadius: 50,
    },
    listContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    listInnerContainer: {
      flexDirection: "row",
      paddingBottom: 8,
    },
    nameContainer: {
      paddingLeft: 6,
    },
    userNameText: {
      paddingBottom: 4,
    },
    nameTextColor: {
      color: "white",
    },
  });
};

export default FollowerFollowingScreen;
