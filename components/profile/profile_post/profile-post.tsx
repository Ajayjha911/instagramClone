import React, { useMemo } from "react";
import {
  useWindowDimensions,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "./profile_post.style";
import Icon from "react-native-vector-icons/FontAwesome5";

declare type ProfilePostProps = {
  isSelected?: boolean;
  image: any;
  onPress: () => void;
};

const ProfilePost: React.FC<ProfilePostProps> = ({
  image,
  onPress,
  isSelected = false,
}) => {
  const screenWidth = useWindowDimensions().width - 20;

  return (
    <View style={styles.imageContainer(screenWidth)}>
      <TouchableOpacity onPress={onPress}>
        {!isSelected && (
          <Image
            source={image}
            style={styles.contentImage}
            resizeMode="cover"
          />
        )}
        {isSelected && (
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={{ ...styles.checkedImage, ...styles.imageDisplay }}
          >
            <View style={styles.checkCont}>
              <Icon name="check" size={24} color={"#0a0a0a"} />
            </View>
          </ImageBackground>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePost;
