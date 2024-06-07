import {
  SearchUsersState,
  selectRecentSearches,
  setClearRecentSearch,
  setRecentSearches,
} from "@redux/slices/searchSlice";
import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import NewIcon from "react-native-vector-icons/Ionicons";
import Avatar from "@components/avatar/avatar";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  UserState,
  selectLoggedInUser,
  selectUsersList,
} from "@redux/slices/appSlice";

declare type RecentSearches = {
  searchText: string;
  setViewProfile: React.Dispatch<React.SetStateAction<UserState>>;
};

const RecentSearches: React.FC<RecentSearches> = ({
  searchText,
  setViewProfile,
}) => {
  const recentSearches = useAppSelector(selectRecentSearches);
  const dispatch = useAppDispatch();
  const loggedInUser = useAppSelector(selectLoggedInUser);
  const userLists = useAppSelector(selectUsersList);

  const handleRecentSearchClear = (user: SearchUsersState) => {
    dispatch(setClearRecentSearch(user));
  };

  const dataToBeUsed = useMemo(() => {
    const found: SearchUsersState[] = [];
    userLists.forEach((user) => {
      if (
        user.display_name.toLowerCase().includes(searchText.toLowerCase()) ||
        user.user_name.toLowerCase().includes(searchText.toLowerCase())
      ) {
        found.push(user);
      }
    });
    return searchText?.length > 0 ? found : recentSearches;
  }, [searchText, recentSearches]);

  const handlePress = (user: SearchUsersState) => {
    if (searchText?.length > 0) {
      dispatch(setRecentSearches(user));
    }
    setViewProfile(user);
    console.log("in else");
  };

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
              styles.container,
              searchText?.length > 0 && index === 0 && { paddingTop: 24 },
            ]}
            key={index}
          >
            <View style={styles.subContainer}>
              <TouchableOpacity
                onPress={() => handlePress(user)}
                activeOpacity={1}
                style={{ flexDirection: "row" }}
              >
                <React.Fragment>
                  {/* <Image
                source={{ uri: user.profile_image }}
                style={styles.recentSearchImages}
              /> */}
                  <Avatar
                    title={user.display_name}
                    height={35}
                    width={35}
                    titleSize={16}
                  />
                  <View style={styles.recentTextContainer}>
                    <Text style={[styles.recentSearchText]}>
                      {user.user_name}
                    </Text>
                    <Text
                      style={[
                        styles.recentSearchText,
                        styles.recentSearchTextId,
                      ]}
                    >
                      {user.display_name}
                      {loggedInUser?.following?.includes(user?.id)
                        ? " • Following"
                        : ""}
                    </Text>
                  </View>
                </React.Fragment>
              </TouchableOpacity>
            </View>
            {searchText.length === 0 && (
              <TouchableWithoutFeedback
                onPress={() => handleRecentSearchClear(user)}
              >
                <NewIcon
                  name="close"
                  size={24}
                  color="grey"
                  style={styles.crossIcon}
                />
              </TouchableWithoutFeedback>
            )}
          </View>
        );
      })}
    </View>
  );
};
export default RecentSearches;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
  },
  subContainer: {
    flexDirection: "row",
  },
  recentHeading: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 16,
  },
  recentTextContainer: {
    paddingLeft: 16,
  },
  recentSearchTextId: {
    fontWeight: "normal",
    opacity: 0.7,
  },
  recentSearchImages: {
    height: 35,
    width: 35,
    borderRadius: 100,
  },
  recentSearchText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  crossIcon: {
    alignSelf: "center",
  },
});
