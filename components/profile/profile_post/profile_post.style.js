import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
  imageContainerList: { marginRight: SIZES.small },
  imageContainer: (width, height) => ({
    width: width / 3 || 150,
    maxHeight: 150,
  }),
  contentImage: {
    width: "100%",
    height: "100%",
  },
});

export default styles;
