import {
  RouteProp,
  useNavigation,
  useNavigationState,
  useRoute,
} from "@react-navigation/native";
import React, { useMemo, useRef, useState } from "react";
import {
  ActionSheetIOS,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CustomButton from "@components/custom-button/custom-button";
import ProfileHeader from "@components/profile-header/profile-header";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import {
  FollowerFollowingType,
  removeFollower,
  selectLoggedInUser,
} from "@redux/slices/appSlice";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import Divider from "@components/divider/divider";
import { emptyFunc } from "@helpers/func";

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
  const style = getStyles();
  const loggedInUser = useAppSelector(selectLoggedInUser);

  const dispatch = useAppDispatch();
  const navigationState = useNavigationState((state) => state); // Get navigation state
  const currentRouteName = navigationState.routes[navigationState.index].name;
  const [removeFollowerValue, setRemoveFollowerValue] =
    useState<FollowerFollowingType>({
      id: "",
      user_name: "",
      profile_image: "",
      display_name: "",
    });

  const isTabFollower = useMemo(() => {
    return currentRouteName.includes("Followers") ? true : false;
  }, [currentRouteName]);

  const users = useMemo(() => {
    if (isTabFollower) {
      return loggedInUser?.followers;
    } else {
      return loggedInUser?.following;
    }
  }, [loggedInUser.followers, loggedInUser.following, isTabFollower]);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePress = (user: FollowerFollowingType) => {
    if (isTabFollower) {
      setRemoveFollowerValue(user);
      bottomSheetModalRef.current?.present();
    }
  };

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
                onClick={() => handlePress(user)}
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

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={["40%"]}
          handleIndicatorStyle={{
            backgroundColor: "black",
          }}
          backgroundStyle={{
            backgroundColor: "black",
          }}
        >
          <BottomSheetView style={style.removeContainer}>
            <View style={style.removeFollowerContainer}>
              <Image
                source={removeFollowerValue?.profile_image}
                style={style.profileImage}
              />
            </View>
            <Text style={style.removeHeading}>Remove follower?</Text>
            <Text style={style.removeSubHeading}>
              We won't tell that{" "}
              <Text style={{ fontWeight: "bold" }}>
                {removeFollowerValue?.user_name}
              </Text>{" "}
              were {"\n"} removed from your followers.
            </Text>
            <Divider border={0.2} />
            <View style={style.removeButtonContainer}>
              <CustomButton
                title="Remove"
                onClick={() => {
                  dispatch(removeFollower({ id: removeFollowerValue?.id }));
                  bottomSheetModalRef?.current?.close();
                }}
                backgroundColor="transparent"
                textColor="red"
              />
              <CustomButton
                title="Cancel"
                onClick={() => {
                  bottomSheetModalRef?.current?.close();
                }}
                backgroundColor="transparent"
                textColor="white"
              />
            </View>
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
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
    removeContainer: {
      backgroundColor: "#272525",
      flex: 1,
      paddingBottom: 4,
    },
    removeHeading: {
      textAlign: "center",
      fontSize: 16,
      fontWeight: "bold",
      color: "white",
      paddingTop: 16,
    },
    removeSubHeading: {
      textAlign: "center",
      paddingHorizontal: 16,
      color: "white",
      fontSize: 16,
      opacity: 0.8,
      paddingBottom: 8,
    },
    removeButtonContainer: {
      flex: 1,
      position: "absolute",
      bottom: 10,
      width: "100%",
    },
    removeFollower: {
      height: 35,
      width: 35,
      borderRadius: 50,
    },
    removeFollowerContainer: {
      alignSelf: "center",
      paddingTop: 16,
    },
  });
};

export default FollowerFollowingScreen;
