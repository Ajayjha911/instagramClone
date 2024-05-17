import { StyleSheet, Dimensions } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

const screenWidth = Dimensions.get("window").width - 20;
export default StyleSheet.create({
  rootContainer: {
    flex: 1,
    gap: 10,
    paddingHorizontal: 10,
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    margin: 10,
    marginTop: 7,
  },
  imageContainer: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100 / 2,
  },
  countContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 15,
  },
  detailContainer: { alignItems: "center" },
  textLabel: {
    fontFamily: FONT.medium,
    fontSize: 16,
  },
  textValue: {
    fontFamily: FONT.medium,
    fontSize: 17,
  },
  bioContainer: {
    paddingHorizontal: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 5,
  },
  container: {
    backgroundColor: COLORS.tertiary,
    padding: 10,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium / 2,
  },
  addFollowerContainer: {
    backgroundColor: COLORS.tertiary,
    padding: 10,
    paddingRight: 8,
    borderRadius: SIZES.medium / 2,
    alignItems: "center",
    justifyContent: "center",
  },

  iconContainer: {
    flexDirection: "row",
    gap: 2,
  },
  iconBtnContainer: (name, activeTab) => ({
    width: "50%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: name === activeTab ? 2 : 0,
    borderBottomColor: name === activeTab ? COLORS.tertiary : "",
  }),
  iconBtnText: {
    fontFamily: FONT.regular,
  },

  noDataContainer: {
    gap: 10,
    height: 300,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
  },

  profileDisplayContainer: {
    backgroundColor: COLORS.tertiary,
    padding: 10,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium / 2,
    marginTop: 10,
  },

  postContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 1,
  },
});
