import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import MidSheet from "./MidSheet";
import AudioRecordingIcon from "../icons/AudioRecording";
import { TouchableOpacity } from "react-native-gesture-handler";
import RecordingSignalIcon from "../icons/RecordingSignal";


function AudioRecordingSheet({ innerRef }) {
  const [isRecording, setIsRecording] = useState(false);



  return (
    <MidSheet
      innerRef={innerRef}
    >
      <View style={styles.header}>
        <AudioRecordingIcon />
        <Text style={styles.headerText}>AUDIO RECORDING</Text>
      </View>
      <Text style={styles.title}>New Recording</Text>
      <Text style={styles.duration}>00:00:59</Text>
      <View style={styles.signalContainer}>
        <RecordingSignalIcon />
      </View>
      <View style={styles.recordButtonContainer}>
        <TouchableOpacity
          style={styles.recordButton}
          onPress={() => setIsRecording(!isRecording)}
        >
          <View style={isRecording ? styles.stopIndicator : styles.playIndicator} />
        </TouchableOpacity>
      </View>
    </MidSheet>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  headerText: {
    color: "black",
    fontSize: 10,
    fontWeight: "700",
    marginLeft: 20,
  },
  title: {
    color: "black",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 18,
  },
  duration: {
    color: "black",
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 17,
  },
  signalContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  recordButtonContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 30,
  },
  recordButton: {
    width: 53,
    height: 54,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#8A8A8A",
    justifyContent: "center",
    alignItems: "center",
  },
  playIndicator: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 7,
    borderBottomWidth: 12,
    borderLeftWidth: 7,
    marginLeft: 4,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#EB5757',
    borderLeftColor: 'transparent',
    transform: [{ rotate: "90deg" }]
  },
  stopIndicator: {
    width: 15,
    height: 15,
    borderRadius: 3,
    backgroundColor: "#EB5757",
  },
});

export default AudioRecordingSheet;
