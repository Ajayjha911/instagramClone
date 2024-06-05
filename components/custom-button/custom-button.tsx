/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import { CustomButtonProps } from "./custom-button.types";

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  title,
  textColor = "white",
  textSize = 16,
  backgroundColor = "blue",
  width = 150,
  paddingTop = 0,
  disabled = false,
  padding = 8,
  loading = false,
  borderRadius = 4,
  borderWidth = 0,
  borderColor = "black",
  textWeight = "500",
}) => {
  const handleClick = () => {
    if (disabled) {
      return;
    }
    onClick();
  };
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop,
          opacity: disabled ? 0.3 : 1,
        },
      ]}
    >
      <TouchableOpacity
        style={{
          backgroundColor,
          width,
          padding,
          borderRadius,
          borderWidth,
          borderColor,
        }}
        onPress={handleClick}
      >
        {loading ? (
          <ActivityIndicator size={"small"} color="white" />
        ) : (
          <Text
            style={{
              ...styles.buttonText,
              color: textColor,
              fontSize: textSize,
              fontWeight: textWeight,
            }}
          >
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  // button: {
  //   borderWidth: 1,
  // },
  buttonText: {
    textAlign: "center",
  },
});

export default CustomButton;
