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
    fontSize: 20,
    fontWeight: "600",
  },
  textValue: {
    fontFamily: FONT.medium,
    fontSize: 18,
    fontWeight: "600",
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
    backgroundColor: "#e5e7eb",
    padding: 10,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium / 2,
  },
  addFollowerContainer: {
    backgroundColor: "#e5e7eb",
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
    width: "33.5%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: name === activeTab ? 2 : 0,
    borderBottomColor: name === activeTab ? COLORS.tertiary : "",
  }),
  iconBtnText: {
    fontFamily: FONT.regular,
    fontSize: 18,
    fontWeight: "700",
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
  profileHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginBottom: 10,
    marginTop: 5,
  },
  disUserName: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
  },
  profileIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
  },
  userNameText: {
    fontSize: 27,
    fontWeight: "600",
  },
});
