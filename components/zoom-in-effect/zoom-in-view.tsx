import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, View, Dimensions } from "react-native";

const ZoomInView = ({ children, isVisible }) => {
  const scaleAnim = useRef(new Animated.Value(0)).current; // Initial scale value
  const window = Dimensions.get("window");

  useEffect(() => {
    if (isVisible) {
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scaleAnim, {
        toValue: 0,
        duration: 120,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  return (
    <Animated.View
      style={[
        styles.zoomInView,
        {
          transform: [{ scale: scaleAnim }],
          opacity: scaleAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  zoomInView: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "yellow",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Background with opacity for overlay effect
    zIndex: 1000,
  },
});

export default ZoomInView;
