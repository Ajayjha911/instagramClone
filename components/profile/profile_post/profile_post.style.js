import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants";

const styles = StyleSheet.create({
  imageContainerList: { marginRight: SIZES.small },
  imageContainer: (width, height) => ({
    width: width / 3 || 150,
    maxHeight: 150,
    display: "grid",
    placeItems: "center",
  }),
  contentImage: {
    width: "100%",
    height: "100%",
  },
  checkedImage: {
    width: "100%",
    height: "100%",
  },
  checkImageContainer: {
    display: "grid",
    placeItems: "center",
  },
  imageDisplay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  checkCont: {
    backgroundColor: "#e2e8f0",
    height: 40,
    width: 40,
    borderRadius: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  },
});

export default styles;
