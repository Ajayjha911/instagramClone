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
    <View
      style={[
        {
          flex: 1,
          margin: 1,
          height: 200,
          minWidth: 150,
          maxWidth: Number(screenWidth / 2),
        },
      ]}
    >
      <TouchableOpacity onPress={onPress}>
        {
          <Image
            source={image}
            height={200}
            width={200}
            style={{
              width: "100%",
              height: "100%",
            }}
            resizeMode="cover"
          />
        }
        {/* {isSelected && (
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={{ ...styles.checkedImage, ...styles.imageDisplay }}
          >
            <View style={styles.checkCont}>
              <Icon name="check" size={24} color={"#0a0a0a"} />
            </View>
          </ImageBackground>
        )} */}
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePost;
