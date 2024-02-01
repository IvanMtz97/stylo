import React, { useMemo, useEffect, useRef, useCallback, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar, TouchableOpacity, ScrollView, Image } from "react-native";
import SystemNavigationBar from 'react-native-system-navigation-bar';
import { BlurView } from "@react-native-community/blur";

import commonStyles from "../commonStyles";
import theme from "../theme";
import ChevronLeftIcon from "../icons/ChevronLeft";
import CronIcon from "../icons/Cron";
import DocDetailsSheet from "../components/DocDetailsSheet";
import WIcon from "../icons/W";
import FileIcon from "../icons/File";
import PencilIcon from "../icons/Pencil";
import PlayIcon from "../icons/Play";
import TypographyIcon from "../icons/Typography";
import NewNoteIcon from "../icons/NewNote";
import MicrophoneIcon from "../icons/Microphone";

function NewDocumentScreen({ navigation }) {
  const [isDocDetailsSheetVisible, setIsDocDetailsSheetVisible] = useState(true);
  const docDetailsSheetRef = useRef();

  const openDocDetailsSheet = useCallback(() => {
    docDetailsSheetRef.current?.expand();
  }, [docDetailsSheetRef]);
  

  const closeDocDetailsSheet = useCallback(() => {
    docDetailsSheetRef.current?.close();
  }, [docDetailsSheetRef]);

  const onSheetChange = useCallback((status) => {
    setIsDocDetailsSheetVisible(status === 0);
    SystemNavigationBar.setBarMode(status === 0 ? 'dark' : 'light', 'navigation');
  }, []);

  useEffect(() => {
    SystemNavigationBar.setNavigationColor("transparent");
    SystemNavigationBar.setBarMode('light', 'navigation');
    openDocDetailsSheet();
  }, [openDocDetailsSheet]);

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={"transparent"}
      />
      <SafeAreaView style={[commonStyles.screenContainer, { backgroundColor: theme.colors.secondary }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <ChevronLeftIcon />
          </TouchableOpacity>
          <View style={styles.headerLabelsContainer}>
            <Text style={styles.headerTitle}>New Doc</Text>
            <Text style={styles.headerSubtitle}><CronIcon color={theme.colors.primary} /> 2 min Read</Text>
          </View>
          <View style={styles.headerActionsContainer}>
            {isDocDetailsSheetVisible && (
              <View style={styles.headerActionsRow}>
                <TouchableOpacity>
                  <NewNoteIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MicrophoneIcon />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        <ScrollView
          style={styles.imagesList}
          contentContainerStyle={styles.imagesListContent}
        >
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/dyslexia.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/dyslexia2.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require("../assets/dyslexia2.png")}
            />
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.blurContainer}>
          <View
            style={styles.blur}
          >
            <View style={styles.blurInsideContainer}>
              <View style={styles.leftIcon}>
                <WIcon />
              </View>
              <View style={styles.centerContainer}>
                <TouchableOpacity style={styles.pencilButton}>
                  <PencilIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.playButton}>
                  <PlayIcon size="9" color="#FFF" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.typographyButton}>
                  <TypographyIcon />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.docButton}
                onPress={() => openDocDetailsSheet()}
              >
                <FileIcon />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>

      <DocDetailsSheet
        innerRef={docDetailsSheetRef}
        onThumbnailPress={() => closeDocDetailsSheet()}
        onSheetChange={onSheetChange}
        onRecommendationsPress={() => navigation.navigate("Recommendations")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
    justifyContent: "space-between"
  },
  backButton: {
    width: 34,
    height: 34,
    borderRadius: 100,
    backgroundColor: "#485453",
    justifyContent: "center",
    alignItems: "center",
  },
  headerLabelsContainer: {
    height: 50,
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 4,
  },
  headerSubtitle: {
    color: theme.colors.primary,
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
  },
  headerActionsContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    minWidth: 61,
  },
  imagesList: {
    flex: 1,
    marginTop: 40,
  },
  imagesListContent: {
    paddingHorizontal: 17,
    gap: 10,
    paddingBottom: 200,
  },
  imageContainer: {
    width: "100%",
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "red",
  },
  image: {
    width: "100%"
  },
  blurContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 122,
    zIndex: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  blur: {
    width: "100%",
    height: 122,
  },
  blurInsideContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 30,
    paddingHorizontal: 17,
    justifyContent: "space-between",
  },
  leftIcon: {
    width: 37,
    height: 37,
    borderRadius: 37,
    backgroundColor: "#EDECF2",
    justifyContent: "center",
    alignItems: "center",
  },
  centerContainer: {
    width: 150,
    height: 46,
    backgroundColor: "#FFF",
    borderRadius: 100,
    elevation: 10,
    shadowColor: "rgba(0, 0, 0, 0.70)",
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
    backgroundColor: "#22282F",
    justifyContent: "center",
    alignItems: "center",
  },
  typographyButton: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  docButton: {
    width: 37,
    height: 37,
    borderRadius: 100,
    backgroundColor: "#EDECF2",
    justifyContent: "center",
    alignItems: "center",
  },
  headerActionsRow: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 13,
  },
  headerAction: {
    width: 24,
    height: 24,
  },
});

export default NewDocumentScreen;
