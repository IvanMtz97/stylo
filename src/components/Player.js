import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import theme from "../theme";
import PlaybackIcon from "../icons/Playback";
import PlayBackwardsIcon from "../icons/PlayBackwards";
import PauseIcon from "../icons/Pause";
import PlayIcon from "../icons/Play";
import PlayForwardIcon from "../icons/PlayForward";

function Player() {
  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <View style={styles.unPlayedLine} />
        <View style={styles.playedLine} />
        <View style={styles.playedDot} />
      </View>
      <View style={styles.timesContainer}>
        <Text style={styles.time}>00:47</Text>
        <Text style={styles.time}>04:23</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.playbackButton}>
          <PlaybackIcon />
        </TouchableOpacity>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button}>
            <PlayBackwardsIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <PauseIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <PlayIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <PlayForwardIcon />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.playbackButton}>
          <Text style={styles.speedText}>1.1x</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barContainer: {
    width: "100%",
    height: 11,
    justifyContent: "center",
  },
  unPlayedLine: {
    height: 5,
    borderRadius: 10,
    backgroundColor: theme.colors.primary_lighter,
    width: "100%",
    position: "absolute",
    zIndex: 1,
  },
  playedLine: {
    height: 5,
    borderRadius: 10,
    backgroundColor: "black",
    width: "40%",
    position: "absolute",
    zIndex: 2,
  },
  playedDot: {
    width: 11,
    height: 11,
    borderRadius: 10,
    backgroundColor: "black",
    position: "absolute",
    left: "39%",
    zIndex: 3,
  },
  timesContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  time: {
    color: "#B0B0B0",
    fontSize: 8,
    fontWeight: "500",
  },
  actionsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  playbackButton: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  buttonsContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: 43,
    height: 43,
    borderRadius: 43,
    alignItems: "center",
    justifyContent: "center",
  },
  speedText: {
    fontSize: 12,
    fontWeight: "600",
    color: "black",
  },
});

export default Player;
