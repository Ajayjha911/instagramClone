// import useAppTheme from '@hooks/useAppTheme';
// import {AppThemeMode} from '@redux/slices/appSlice';
// import {globalThemeObj} from '@theme/theme';
import React from "react";
import { StyleSheet, View } from "react-native";
declare type DividerProps = {
  border?: number;
};

const Divider: React.FC<DividerProps> = ({ border = 1 }) => {
  // const {mode} = useAppTheme();
  const style = getStyles();
  return (
    <View
      style={[
        style.divider,
        {
          borderBottomWidth: border,
        },
      ]}
    />
  );
};
export default Divider;

const getStyles = () => {
  return StyleSheet.create({
    divider: {
      borderBottomColor: "gray",
    },
  });
};
