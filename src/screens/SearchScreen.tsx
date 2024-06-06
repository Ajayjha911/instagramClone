import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { DATA, USERS } from "../../data";
import {
  SearchUsersState,
  dummyUsers,
  selectRecentSearches,
} from "../redux/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchScreen = () => {
  const dispatch = useDispatch();
  const loggedInUser = USERS[1];

  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  //TODO on clearSearch remove focus
  const clearSearch = () => {
    setSearchText("");
    setIsSearching(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={item.image} />
    </View>
  );

  const recentSearches = useSelector(selectRecentSearches);
  console.log("recentSearches:", recentSearches);

  // const handleRecentSearchClear=()=>{
  //   dispatch()
  // }

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        {isSearching && (
          <TouchableOpacity onPress={clearSearch}>
            <Icon
              style={styles.backIcon}
              name="arrow-left"
              size={18}
              color="white"
            />
          </TouchableOpacity>
        )}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#888"
            style={styles.searchInput}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            onFocus={() => setIsSearching(true)}
          />
          {isSearching && (
            <TouchableOpacity onPress={clearSearch}>
              <Icon
                name="times-circle"
                size={18}
                color="#888"
                style={styles.clearIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.subHeaderWrapper}>
        <TouchableOpacity style={styles.selectedCategoryItem}>
          <Text style={styles.titleSelected}>IGTV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.title}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.title}>Style</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.title}>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Text style={styles.title}>Auto</Text>
        </TouchableOpacity>
      </View>
      {!isSearching ? (
        <React.Fragment>
          <Text style={styles.recentHeading}>Recent</Text>
          {dummyUsers?.map((user) => {
            return (
              <View style={styles.recentSearchContainer}>
                <Image
                  source={{ uri: user.profile_image }}
                  style={styles.recentSearchImages}
                />
                <View style={styles.recentSearchTextContainer}>
                  <Text style={[styles.recentSearchText]}>
                    {user.user_name}
                  </Text>
                  <Text
                    style={[styles.recentSearchText, styles.recentSearchTextId]}
                  >
                    {user.display_name}
                    {loggedInUser?.following?.includes(user?.id)
                      ? " • Following"
                      : ""}
                  </Text>
                </View>
              </View>
            );
          })}
        </React.Fragment>
      ) : (
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
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
  headerWrapper: {
    paddingTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    paddingHorizontal: 10,
    paddingVertical: 5,
    // margin: 10,
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
  },
  backIcon: {
    marginRight: 10,
  },
  clearIcon: {
    marginLeft: 10,
  },
  subHeaderWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  selectedCategoryItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  categoryItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  titleSelected: {
    color: "#000",
    fontWeight: "bold",
  },
  title: {
    color: "#888",
    fontWeight: "bold",
  },
  flatListContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  searchResultContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  searchResultIcon: {
    marginRight: 10,
  },
  searchResultText: {
    color: "#888",
    fontSize: 18,
  },
});

export default SearchScreen;
