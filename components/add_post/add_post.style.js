import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const screenWidth = Dimensions.get("window").width - 20;
const screenHeight = Dimensions.get("window").height - 20;

export default StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 10,
    // alignItems: "center",
    flex: 1,
    display: "flex",
    gap: 10,
  },
  imageContainerList: {
    height: "400px",
  },
  imageContainer: (width, height) => ({
    width: width || 340,
    maxHeight: 250,
  }),
  contentImage: {
    width: "100%",
    height: "100%",
  },
  postContainer: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btnContainer: {
    marginTop: 7,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  nextBtnText: {
    fontFamily: FONT.medium,
    fontSize: 24,
    color: "#3b82f6",
    fontWeight: "500",
  },
  createAccount: {
    fontFamily: FONT.medium,
  },
  nextBtnDisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  textInputContainer: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    marginBottom: 30,
    // height: 40,
  },
  captionInput: {
    padding: 2,
    // height: 40,
    fontSize: 20,
    outline: "none",
  },
  extrafet: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginBottom: 30,
  },
  fetContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  textFet: {
    fontSize: 20,
  },
  sharebtnContainer: {
    marginTop: 7,
    backgroundColor: "#3b82f6",
    width: screenWidth,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  createAccount: {
    fontFamily: FONT.medium,
  },
  shareBtnDisplay: {
    display: "absolute",
    bottom: 0,
  },
  sharePostText: {
    fontFamily: FONT.medium,
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  // btnContainer: {
  //   marginTop: 7,
  //   backgroundColor: COLORS.tertiary,
  //   width: 100,
  //   height: 50,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // createAccount: {
  //   fontFamily: FONT.medium,
  // },
  backBtnDisplay: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  selectPostFetContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    margin: 5,
    height: 40,
  },
  recentCont: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
  iconBtn: {
    backgroundColor: "#e5e7eb",
    padding: 1,
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    margin: 2,
  },
  imageDisplayConat: {
    height: 350,
    width: screenWidth,
    backgroundColor: "#e5e5e5",
  },
  cancelPost: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  cancelBtnText: {
    fontSize: 26,
    fontWeight: "600",
  },
});
