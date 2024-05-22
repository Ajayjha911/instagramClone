import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProfilePost from "../../profile/profile_post";
import styles from "../add_post.style";
import { COLORS, SIZES } from "../../../constants";
import Icon from "react-native-vector-icons/FontAwesome5";
import NewIcon from "react-native-vector-icons/Ionicons";

const SelectImage = ({
  allImages,
  postDetails,
  handleOnImageChange,
  onNext,
}) => {
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
          <TouchableOpacity style={styles.cancelIconBtn} onPress={() => {}}>
            <NewIcon name="close" size={40} />
          </TouchableOpacity>
          <Text style={styles.cancelBtnText}>New Post</Text>
        </View>
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => onNext("sharePost")}
          disabled={!postDetails.images.length}
        >
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageDisplayConat}>
        <FlatList
          style={styles.imageContainerList}
          data={postDetails.images}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            display: "flex",
            alignItems: "center",
            columnGap: SIZES.small,
          }}
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
      </View>

      <View style={styles.selectPostFetContainer}>
        <TouchableOpacity style={styles.recentCont}>
          <Text style={styles.text}>Recent</Text>
          <Icon name="chevron-down" size={20} />
        </TouchableOpacity>
        <View style={styles.recentCont}>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="paste" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Icon name="camera" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.postContainer}>
          {allImages.map((itm) => (
            <ProfilePost
              key={itm.key}
              image={itm.value}
              showActionBtn={false}
              showHeader={false}
              onPress={() => handleOnImageChange(itm.value)}
              isSelected={postDetails.images.includes(itm.value)}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default SelectImage;
