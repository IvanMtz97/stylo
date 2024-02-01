import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MidSheet from "./MidSheet";
import WIcon from "../icons/W";
import theme from "../theme";
import ThumbnailIcon from "../icons/Thumbnail";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import PlanetIcon from "../icons/Planet";
import PencilIcon from "../icons/Pencil";
import PlayIcon from "../icons/Play";
import TypographyIcon from "../icons/Typography";
import CheckIcon from "../icons/Check";
import NormalTypographyIcon from "../icons/NormalTypography";
import ItalicTypographyIcon from "../icons/ItalicTypography";
import BoldTypographyIcon from "../icons/BoldTypography";
import Player from "./Player";
import TypographySelectedIcon from "../icons/TypographySelected";
import StopCircleIcon from "../icons/StopCircle";

function DocDetailsSheet({ innerRef, onThumbnailPress, onSheetChange, onRecommendationsPress }) {
  const [visibleMenu, setVisibleMenu] = useState("");

  return (
    <MidSheet
      innerRef={innerRef}
      snapPoint="85%"
      onChange={onSheetChange}
      noHandle
    >
      <View style={styles.sheetContainer}>
        <View style={styles.header}>
          <View style={styles.leftIcon}>
            <WIcon />
          </View>
          <TouchableOpacity
            style={styles.recommendationsContainer}
            onPress={() => onRecommendationsPress()}
          >
            <Text style={styles.recommendationsText}>10 subject recommendations</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onThumbnailPress} style={styles.thumbnailButton}>
            <ThumbnailIcon />
          </TouchableOpacity>
        </View>
        
        <BottomSheetScrollView style={styles.contentScrollView}>
          <View style={styles.contentScrollViewContent}>
            <Text style={styles.title}>Dyslexia information from Wikipedia</Text>
            <Text style={styles.parraph}>Dyslexia used to be known as "word blindness." It's a learning problem that makes reading or writing hard for some people. This problem can affect people in different ways and to different degrees.</Text>
            <Text style={styles.parraph}>It can make spelling words, reading fast, writing words, saying words in one's head, or saying words out loud when reading, difficult. It might also make understanding what's read challenging. Most times, these problems begin to show in school.Those with dyslexia don't choose to have these difficulties — they happen without will, but these people have a normal wish to learn.</Text>
            <Text style={styles.parraph}>Dyslexia used to be known as "word blindness." It's a learning problem that makes reading or writing hard for some people. This problem can affect people in different ways and to different degrees.</Text>
            <Text style={styles.parraph}>It can make spelling words, reading fast, writing words, saying words in one's head, or saying words out loud when reading, difficult. It might also make understanding what's read challenging. Most times, these problems begin to show in school.Those with dyslexia don't choose to have these difficulties — they happen without will, but these people have a normal wish to learn.</Text>
            <Text style={styles.parraph}>Dyslexia used to be known as "word blindness." It's a learning problem that makes reading or writing hard for some people. This problem can affect people in different ways and to different degrees.</Text>
            <Text style={styles.parraph}>It can make spelling words, reading fast, writing words, saying words in one's head, or saying words out loud when reading, difficult. It might also make understanding what's read challenging. Most times, these problems begin to show in school.Those with dyslexia don't choose to have these difficulties — they happen without will, but these people have a normal wish to learn.</Text>
          </View>
          
          <View style={styles.insightContainer}>
            <View style={styles.insightTitleContainer}>
              <PlanetIcon />
              <Text style={styles.insightTitle}>Added Insight</Text>
            </View>
            <Text style={styles.insightSubtitle}>Best Tools For People With Dyslexia</Text>
            <Text style={styles.insightDescription}>In this article we explain what learning difficulties are with a specific section dedicated to dyslexia & </Text>
          </View>

          <View style={styles.contentScrollViewContent}>
            <Text style={styles.parraph}>Dyslexia used to be known as "word blindness." It's a learning problem that makes reading or writing hard for some people. This problem can affect people in different ways and to different degrees.</Text>
            <Text style={styles.parraph}>It can make spelling words, reading fast, writing words, saying words in one's head, or saying words out loud when reading, difficult. It might also make understanding what's read challenging. Most times, these problems begin to show in school.Those with dyslexia don't choose to have these difficulties — they happen without will, but these people have a normal wish to learn.</Text>
            <Text style={styles.parraph}>Dyslexia used to be known as "word blindness." It's a learning problem that makes reading or writing hard for some people. This problem can affect people in different ways and to different degrees.</Text>
            <Text style={styles.parraph}>It can make spelling words, reading fast, writing words, saying words in one's head, or saying words out loud when reading, difficult. It might also make understanding what's read challenging. Most times, these problems begin to show in school.Those with dyslexia don't choose to have these difficulties — they happen without will, but these people have a normal wish to learn.</Text>
          </View>
          <View style={styles.endSpace} />
        </BottomSheetScrollView>

        <View style={styles.actionsContainer}>
          {visibleMenu === "typography" && (
            <View style={styles.typographyContainer}>
              <TouchableOpacity style={styles.checkButton}>
                <CheckIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton}>

              </TouchableOpacity>
              <TouchableOpacity style={styles.primaryButton}>

              </TouchableOpacity>
              <TouchableOpacity style={styles.letterTypographyButton}>
                <NormalTypographyIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.letterTypographyButton}>
                <ItalicTypographyIcon />
              </TouchableOpacity>
              <TouchableOpacity style={styles.letterTypographyButton}>
                <BoldTypographyIcon />
              </TouchableOpacity>
            </View>
          )}
          {visibleMenu === "audio" && (
            <View style={styles.audioContainer}>
              <Player />
            </View>
          )}
          <View style={styles.centerContainer}>
            <TouchableOpacity style={styles.pencilButton}>
              <PencilIcon />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.playButton, { backgroundColor: visibleMenu === "audio" ? "#FFF" : "#22292F" }]}
              onPress={() => setVisibleMenu("audio")}
            >
              {visibleMenu === "audio" ? <StopCircleIcon /> : <PlayIcon size="9" color="#FFF" />}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.typographyButton}
              onPress={() => setVisibleMenu("typography")}
            >
              {visibleMenu === "typography" ? <TypographySelectedIcon /> : <TypographyIcon />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </MidSheet>
  )
}

const styles = StyleSheet.create({
  sheetContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    paddingHorizontal: 17,
    paddingVertical: 20,
  },
  leftIcon: {
    width: 37,
    height: 37,
    borderRadius: 100,
    backgroundColor: "#EDECF2",
    justifyContent: "center",
    alignItems: "center",
  },
  recommendationsContainer: {
    height: 37,
    borderRadius: 100,
    backgroundColor: theme.colors.primary_light,
    marginLeft: 10,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  recommendationsText: {
    color: "#836400",
    fontSize: 10,
    fontWeight: "600",
  },
  thumbnailButton: {
    width: 37,
    height: 37,
    borderRadius: 100,
    backgroundColor: "#EDECF2",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },
  contentScrollView: {
    flex: 1,
    marginTop: 10,
  },
  contentScrollViewContent: {
    paddingHorizontal: 17,
    gap: 20,
    marginBottom: 20,
  },
  endSpace: {
    width: "100%",
    height: 202,
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "800",
  },
  parraph: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
  },
  insightContainer: {
    width: "100%",
    paddingHorizontal: 17,
    paddingVertical: 21,
    backgroundColor: theme.colors.primary_lighter,
    marginTop: 20,
    marginBottom: 20,
  },
  insightTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  insightTitle: {
    color: "#838383",
    fontSize: 10,
    fontWeight: "500",
    marginLeft: 5,
  },
  insightSubtitle: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 20,
  },
  insightDescription: {
    color: "black",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 5,
    lineHeight: 25,
  },
  actionsContainer: {
    position: "absolute",
    zIndex: 3,
    bottom: 50,
    right: 0,
    left: 0,
    alignItems: "center",
    paddingHorizontal: 17,
  },
  centerContainer: {
    width: 150,
    height: 46,
    backgroundColor: "#FFF",
    borderRadius: 100,
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  pencilButton: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    width: 28,
    height: 28,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  typographyButton: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  typographyContainer: {
    marginBottom: 10,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 12,
    gap: 10,
    height: 61,
    borderRadius: 100,
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    flexDirection: "row",
  },
  checkButton: {
    width: 37,
    height: 37,
    borderRadius: 37,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E9E9E9",
  },
  secondaryButton: {
    width: 37,
    height: 37,
    borderRadius: 37,
    backgroundColor: theme.colors.secondary,
  },
  primaryButton: {
    width: 37,
    height: 37,
    borderRadius: 37,
    backgroundColor: theme.colors.primary,
  },
  letterTypographyButton: {
    width: 37,
    height: 37,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  audioContainer: {
    marginBottom: 10,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    marginHorizontal: 17,
    width: "100%",
  },
});

export default DocDetailsSheet;
