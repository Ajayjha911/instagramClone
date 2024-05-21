import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../config/color";
import { DATA } from "../../data";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchPress = () => {
    if (isSearching) {
      setIsSearching(false);
      setSearchText("");
    } else {
      setIsSearching(true);
    }
  };

  const clearSearch = () => {
    setSearchText("");
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={item.image} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerWrapper}>
        {isSearching && (
          <TouchableOpacity onPress={handleSearchPress}>
            <Icon
              style={styles.backIcon}
              name="arrow-left"
              size={18}
              color="#000"
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
          {searchText !== "" && (
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

      {searchText === "" ? (
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
        />
      ) : (
        <View style={styles.searchResultContainer}>
          <Icon
            name="search"
            size={18}
            color="#888"
            style={styles.searchResultIcon}
          />
          <Text style={styles.searchResultText}>{searchText}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    backgroundColor: "#EFEFEF",
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    color: "#000",
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
