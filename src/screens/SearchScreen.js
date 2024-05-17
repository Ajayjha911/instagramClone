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
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../config/color";

const DATA = [
  {
    id: "jhgjfhd787",
    Title: "Rose",
    subTitle: "Lorem Ipum",
    image: require("../../assets/post/post1.jpg"),
  },
  {
    id: "fdgdfgdfgf",
    Title: "Janaki",
    subTitle: "Lorem Ipum",
    image: require("../../assets/post/post2.jpg"),
  },
  {
    id: "cvbfddffff",
    Title: "Renuka",
    subTitle: "Lorem Ipum",
    image: require("../../assets/post/post3.jpg"),
  },
  {
    id: "dfghfghfgh",
    Title: "Sita",
    subTitle: "Lorem Ipum",
    image: require("../../assets/post/post4.jpg"),
  },
  {
    id: "iuyiouyiuo",
    Title: "Gita",
    subTitle: "Lorem Ipum",
    image: require("../../assets/post/post5.jpg"),
  },
];

const SearchScreen = () => {
  const navigation = useNavigation();
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

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.title}>{item.Title}</Text>
      <Text style={styles.subTitle}>{item.subTitle}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View>
          {isSearching && (
            <TouchableOpacity onPress={handleSearchPress}>
              <Icon
                style={styles.backIcon}
                name="arrow-left"
                size={20}
                color={colors.gray}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            style={styles.searchInput}
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            onFocus={() => setIsSearching(true)}
            Icon="search"
          />
        </View>
      </View>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={renderItem}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  headerWrapper: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  searchContainer: {
    backgroundColor: "#EFEFEF",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  backIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: colors.gray,
    fontSize: 16,
    paddingVertical: 8,
  },
  flatListContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    borderRadius: 10,
    backgroundColor: colors.gray2,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
  subTitle: {
    color: colors.gray,
    fontSize: 14,
  },
});
