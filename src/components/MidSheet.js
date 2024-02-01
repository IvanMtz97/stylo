import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";

function Handle() {
  return (
    <View style={styles.handleContainer}>
      <View style={styles.handle} />
    </View>
  )
}

function MidSheet({ children, innerRef, snapPoint, noHandle, onChange }) {
  const snapPoints = useMemo(() => [snapPoint || "50%"]);

  return (
    <BottomSheet
      snapPoints={snapPoints}
      ref={innerRef}
      handleComponent={noHandle ? null : () => <Handle />}
      onChange={onChange}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          disappearsOnIndex={-1}
          style={styles.sheetBackdrop}
          {...props}
        />
      )}
      index={-1}
      enablePanDownToClose
      style={styles.sheetContainer}
    >
      {children}
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  handleContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 20,
  },
  handle: {
    backgroundColor: "#E5E5E5",
    borderRadius: 20,
    width: 60,
    height: 5,
  },
  sheetContainer: {
    backgroundColor: "white",
    borderRadius: 30,
    overflow: "hidden",
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  sheetBackdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.27)",
  },
});

export default MidSheet;
