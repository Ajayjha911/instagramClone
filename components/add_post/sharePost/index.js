import React from "react";
import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "../add_post.style";
import { SIZES } from "../../../constants";
import Icon from "react-native-vector-icons/FontAwesome5";

const fetData = [
  {
    title: "Add Location",
    icon: "map-marker",
  },
  {
    title: "Tag People",
    icon: "user-alt",
  },
];

const SharePost = ({ allImages, postDetails, onBack, onTextChange }) => {
  const screenWidth = useWindowDimensions().width;
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.cancelPost}>
          <TouchableOpacity
            style={styles.cancelIconBtn}
            onPress={() => onBack("selectPost")}
          >
            <Icon name="arrow-left" size={24} />
          </TouchableOpacity>
          <Text style={styles.cancelBtnText}>New Post</Text>
        </View>
      </View>
      <View>
        <FlatList
          style={styles.imageContainerList}
          data={postDetails.images}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: SIZES.small }}
          renderItem={({ item }) => (
            <View style={styles.imageContainer(screenWidth)}>
              <Image
                source={item} // need to check it gives error
                style={styles.contentImage}
                resizeMode="cover"
              />
            </View>
          )}
        />

        <View style={styles.textInputContainer}>
          <TextInput
            multiline
            numberOfLines={3}
            placeholder="Write a caption or add a poll"
            style={styles.captionInput}
            onChangeText={(value) => onTextChange("description", value)}
          />
        </View>

        <View>
          {fetData.map((fet, index) => (
            <TouchableOpacity key={index} style={styles.extrafet}>
              <View style={styles.fetContainer}>
                <Icon name={fet.icon} size={30} />
                <Text style={styles.textFet}>{fet.title}</Text>
              </View>
              <View>
                <Icon name="chevron-right" size={20} />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.shareBtnDisplay}>
          <TouchableOpacity style={styles.sharebtnContainer}>
            <Text style={styles.sharePostText}>Share Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SharePost;
