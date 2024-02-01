import React, { useMemo } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import LinkIcon from "../icons/Link";
import PencilIcon from "../icons/Pencil";
import AudioRecordingIcon from "../icons/AudioRecording";
import ProfileIcon from "../icons/Profile";
import SettingsIcon from "../icons/Settings";
import PowerOffIcon from "../icons/PowerOff";
import CloseIcon from "../icons/Close";
import theme from "../theme";

const AddStyloCardModal = ({ onSelect, onClose, innerRef }) => {
  const snapPoints = useMemo(() => ["55%"]);

  return (
    <BottomSheet
      ref={innerRef}
      snapPoints={snapPoints}
      bottomInset={100}
      index={-1}
      enablePanDownToClose
      handleComponent={null}
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          disappearsOnIndex={-1}
          style={styles.sheetBackdrop}
          {...props}
        />
      )}
      detached
      style={styles.sheetContainer}
    >
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSelect("websiteLink")}
        >
          <LinkIcon />
          <Text style={styles.buttonText}>WEBSITE LINK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSelect("newDocument")}
        >
          <PencilIcon />
          <Text style={styles.buttonText}>NEW DOCUMENT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSelect("audioRecording")}
        >
          <AudioRecordingIcon />
          <Text style={styles.buttonText}>AUDIO RECORDING</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSelect("profile")}
        >
          <ProfileIcon />
          <Text style={styles.buttonText}>PROFILE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <SettingsIcon />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.closeActionButton}
          onPress={onClose}
        >
          <CloseIcon />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onSelect("powerOff")}
          style={styles.actionButton}
        >
          <PowerOffIcon />
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    backgroundColor: "white",
    marginHorizontal: 24,
    borderRadius: 38,
    overflow: "hidden",
    padding: 22,
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  sheetBackdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.27)",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 13,
    marginBottom: 13,
  },
  button: {
    flex: 1,
    height: 136,
    backgroundColor: "#F2F2F2",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 20,
  },
  actionsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 20,
  },
  actionButton: {
    width: 42,
    height: 42,
    borderRadius: 42,
    backgroundColor: "#F2F2F2",
    justifyContent: "center",
    alignItems: "center",
  },
  closeActionButton: {
    width: 56,
    height: 56,
    borderRadius: 100,
    backgroundColor: theme.colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AddStyloCardModal;
