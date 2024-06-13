import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

declare type BottomSheet1Props = {
  children: any;
  openBottomSheet: boolean;
  setOpenBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  snapPoints?: string[];
};

const BottomSheet: React.FC<BottomSheet1Props> = ({
  children,
  openBottomSheet,
  setOpenBottomSheet,
  snapPoints = ["25%", "60%", "90%"],
}) => {
  useEffect(() => {
    if (openBottomSheet) {
      handlePresentModalPress();
    }
  }, [openBottomSheet]);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // const snapPoints = useMemo(() => ["30%", "90%"], []);

  const handlePresentModalPress = useCallback(() => {
    console.log("here");

    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      setOpenBottomSheet(false);
    }
  }, []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleIndicatorStyle={{
          backgroundColor: "white",
        }}
        backgroundStyle={{
          backgroundColor: "black",
        }}
      >
        <BottomSheetView style={styles.container}>
          {/* <View style={styles.contentContainer}>{children}</View> */}
          {children}
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
});

export default BottomSheet;
