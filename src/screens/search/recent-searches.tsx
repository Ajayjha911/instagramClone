import {
  SearchUsersState,
  dummyUsers,
  selectRecentSearches,
  setClearRecentSearch,
} from "@redux/slices/searchSlice";
import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NewIcon from "react-native-vector-icons/Ionicons";
import { USERS } from "data";

declare type RecentSearches = {
  searchText: string;
};

const RecentSearches: React.FC<RecentSearches> = ({ searchText }) => {
  const recentSearches = useSelector(selectRecentSearches);
  const dispatch = useDispatch();
  const loggedInUser = USERS[1];

  const handleRecentSearchClear = (user: SearchUsersState) => {
    dispatch(setClearRecentSearch(user));
  };

  const dataToBeUsed = useMemo(() => {
    const found = [];
    dummyUsers.forEach((user) => {
      if (
        user.display_name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.user_name.toLowerCase().includes(searchText.toLowerCase())
      ) {
        found.push(user);
      }
    });
    return searchText?.length > 0 ? found : recentSearches;
  }, [searchText, recentSearches]);

  console.log("dataToBeUsed:", dataToBeUsed);
  return (
    <View>
      {searchText.length === 0 && (
        <Text style={styles.recentHeading}>Recent</Text>
      )}
      {recentSearches?.length === 0 && searchText.length === 0 && (
        <Text style={{ color: "white" }}>No Recent Searches</Text>
      )}
      {searchText?.length > 0 && dataToBeUsed?.length === 0 && (
        <Text style={{ color: "white", paddingTop: 16 }}>No user found</Text>
      )}
      {dataToBeUsed?.map((user, index) => {
        return (
          <View
            style={[
              styles.recentSearchContainer,
              searchText?.length > 0 &&
                index === 0 && {
                  paddingTop: 16,
                },
            ]}
          >
            <Image
              source={{ uri: user.profile_image }}
              style={styles.recentSearchImages}
            />
            <View style={styles.recentSearchTextContainer}>
              <View
                style={{
                  flexDirection: "column",
                }}
              >
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
              {searchText.length === 0 && (
                <TouchableWithoutFeedback
                  onPress={() => handleRecentSearchClear(user)}
                >
                  <NewIcon name="close" size={24} color="red" />
                </TouchableWithoutFeedback>
              )}
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
    backgroundColor: "blue",
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
