import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Animated, { useSharedValue, withTiming, Easing, useAnimatedStyle, withRepeat, cancelAnimation, runOnJS } from "react-native-reanimated";
import MidSheet from "./MidSheet";
import WIcon from "../icons/W";
import theme from "../theme";
import ReplayIcon from "../icons/Replay";
import ThumbnailIcon from "../icons/Thumbnail";
import GeneratingIcon from "../icons/Generating";

function GeneratingSheet({ innerRef, onGenerated, isDocumentGenerating }) {
  const loadingHeightAnimation = useSharedValue(0);
  const rotateAnimation = useSharedValue(0);

  const onLoadingAnimationEnd = () => {
    if (isDocumentGenerating) {
      console.log("ANIMATION END");
      onGenerated();
    }
  }

  const loadingStyles = useAnimatedStyle(() => {
    return {
      height: withTiming(`${loadingHeightAnimation.value}%`, {
        duration: 1000,
      }, () => {
        try {
          runOnJS(onLoadingAnimationEnd)();
        } catch (error) {
          console.log("FINISHED ERR");
        }
      }),
    };
  }, [rotateAnimation.value]);

  const rotateStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotateAnimation.value}deg` }]
    };
  });


  useEffect(() => {
    if (isDocumentGenerating) {
      loadingHeightAnimation.value = withTiming(100, {
        duration: 10000,
        easing: Easing.linear,
      });
  
      return () => cancelAnimation(loadingHeightAnimation);
    }
  }, [isDocumentGenerating]);

  useEffect(() => {
    rotateAnimation.value = withRepeat(
      withTiming(360, {
        duration: 5000,
        easing: Easing.linear,
      }),
      -1,
    );

    return () => cancelAnimation(rotateAnimation);
  }, []);

  return (
    <MidSheet
      innerRef={innerRef}
      snapPoint="85%"
      noHandle
    >
      <Animated.View style={[styles.loadingIndicator, loadingStyles]} />
      <View style={styles.sheetContentContainer}>
        <View style={styles.sheetContentContainer}>
          <View style={styles.header}>
            <View style={styles.websiteIcon}>
              <WIcon />
            </View>
            <View style={styles.generatingIndicator}>
              <Animated.View style={rotateStyles}>
                <ReplayIcon />
              </Animated.View>
              <Text style={styles.generatingText}>Generating</Text>
            </View>
            <View style={styles.imageIcon}>
              <ThumbnailIcon />
            </View>
          </View>
          <View style={styles.container}>
            <GeneratingIcon />
            <Text style={styles.title}>Robot reading so you dont have to</Text>
            <Text style={styles.description}>The AI is summarizing the page for you now.</Text>
          </View>
        </View>
      </View>
    </MidSheet>
  );
}

const styles = StyleSheet.create({
  sheetContainer: {
    position: "relative",
    flex: 1,
  },
  sheetContentContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 3,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    marginTop: 20,
  },
  websiteIcon: {
    width: 37,
    height: 37,
    borderRadius: 100,
    backgroundColor: "#EDECF2",
    justifyContent: "center",
    alignItems: "center",
  },
  generatingIndicator: {
    width: 127,
    height: 37,
    borderRadius: 100,
    backgroundColor: theme.colors.primary_light,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  generatingText: {
    marginLeft: 10,
    fontSize: 10,
    fontWeight: "600",
    color: "#836400",
  },
  imageIcon: {
    width: 37,
    height: 37,
    borderRadius: 100,
    backgroundColor: "#EDECF2",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    width: 250,
  },
  loadingIndicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.colors.primary_light,
    zIndex: 2,
  },
});

export default GeneratingSheet;
