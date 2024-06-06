import React, { useRef, useState } from "react";
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
import { DATA } from "../../../data";

import RecentSearches from "./recent-searches";
import CustomButton from "@components/custom-button/custom-button";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef(null);

  const clearSearch = () => {
    setSearchText("");
    setIsSearching(false);
    if (inputRef) {
      inputRef.current.blur();
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={item.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          ref={inputRef}
          placeholder="Search"
          placeholderTextColor="#888"
          style={styles.searchInput}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          onFocus={() => setIsSearching(true)}
        />
        {searchText?.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              setSearchText("");
            }}
          >
            <Icon
              name="times-circle"
              size={18}
              color="#888"
              style={styles.clearIcon}
            />
          </TouchableOpacity>
        )}
        {isSearching && (
          <View>
            <CustomButton
              title="Cancel"
              onClick={clearSearch}
              width={80}
              textColor="white"
              backgroundColor="transparent"
            />
          </View>
        )}
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
      {isSearching ? (
        <React.Fragment>
          <RecentSearches searchText={searchText} />
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 8,
    paddingLeft: 8,
  },
  searchInput: {
    borderRadius: 5,
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#333",
  },
  clearIcon: {
    position: "absolute",
    right: 10,
    bottom: -10,
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
