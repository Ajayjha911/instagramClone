import React, { useEffect, useRef } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { BottomSheetProps, BottomSheetRefProps } from "./bottom-sheet.types";
import { StyleSheet, View } from "react-native";
// import useAppTheme from '@hooks/useAppTheme';
// import {AppThemeMode} from '@redux/slices/appSlice';
// import {globalThemeObj} from '@theme/theme';

const BottomSheet: React.FC<BottomSheetProps> = ({
  openBottomSheet,
  setOpenBottomSheet,
  children,
  height = 300,
}) => {
  // const {mode} = useAppTheme();
  const styles = getStyles();
  const refRBSheet = useRef<BottomSheetRefProps>(null);

  useEffect(() => {
    if (openBottomSheet) {
      refRBSheet.current?.open();
    } else {
      refRBSheet.current?.close();
    }
  }, [openBottomSheet]);

  const handleCloseSheet = () => {
    setOpenBottomSheet(false); // Update state when closing the sheet
  };

  return (
    <RBSheet
      ref={refRBSheet}
      height={height}
      openDuration={250}
      closeOnPressMask={true}
      onClose={handleCloseSheet}
      //@ts-ignore
      onRequestClose={() => setOpenBottomSheet(false)} // Handle click outside
      customStyles={{
        container: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
    >
      <View style={styles.bottomSheetContainer}>{children}</View>
    </RBSheet>
  );
};

export default BottomSheet;

const getStyles = () => {
  return StyleSheet.create({
    bottomSheetContainer: {
      height: "100%",
      // backgroundColor: globalThemeObj?.[mode]?.appBackGround,
      backgroundColor: "black",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flex: 1,
    },
    bottomSheetContent: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
