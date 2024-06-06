import {
  SearchUsersState,
  selectRecentSearches,
  setClearRecentSearch,
} from "@redux/slices/searchSlice";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NewIcon from "react-native-vector-icons/Ionicons";
import { USERS } from "data";

const RecentSearches: React.FC = () => {
  const recentSearches = useSelector(selectRecentSearches);
  const dispatch = useDispatch();
  const loggedInUser = USERS[1];

  const handleRecentSearchClear = (user: SearchUsersState) => {
    dispatch(setClearRecentSearch(user));
  };
  return (
    <View>
      <Text style={styles.recentHeading}>Recent</Text>
      {recentSearches?.length === 0 && (
        <Text style={{ color: "white" }}>No Recent Searches</Text>
      )}
      {recentSearches?.map((user) => {
        return (
          <View style={styles.recentSearchContainer}>
            <Image
              source={{ uri: user.profile_image }}
              style={styles.recentSearchImages}
            />
            <View style={styles.recentSearchTextContainer}>
              <View style={{ flexDirection: "column" }}>
                <Text style={[styles.recentSearchText]}>{user.user_name}</Text>
                <Text
                  style={[styles.recentSearchText, styles.recentSearchTextId]}
                >
                  {user.display_name}
                  {loggedInUser?.following?.includes(user?.id)
                    ? " • Following"
                    : ""}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => handleRecentSearchClear(user)}
                style={{}}
              >
                <NewIcon name="close" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};
export default RecentSearches;

const styles = StyleSheet.create({
  recentHeading: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 16,
  },
  recentSearchContainer: {
    paddingBottom: 16,
    flexDirection: "row",
  },
  recentSearchTextContainer: {
    paddingLeft: 16,
    justifyContent: "center",
    flexDirection: "row",
  },
  recentSearchTextId: {
    fontWeight: "normal",
    opacity: 0.7,
  },
  recentSearchImages: {
    height: 40,
    width: 40,
    borderRadius: 100,
  },
  recentSearchText: {
    color: "white",
    fontWeight: "600",
  },
});
