import React, { useMemo, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
import SystemNavigationBar from 'react-native-system-navigation-bar';
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import commonStyles from "../commonStyles";
import theme from "../theme";
import { TouchableOpacity } from "react-native-gesture-handler";
import ChevronLeftIcon from "../icons/ChevronLeft";
import Recommendation from "../components/Recommendation";


function RecommendationsScreen({ navigation }) {
  const snapPoints = useMemo(() => ["95%"]);

  useEffect(() => {
    SystemNavigationBar.setNavigationColor("transparent");
    SystemNavigationBar.setBarMode('dark', 'navigation');
  }, []);

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={"transparent"}
      />

      <SafeAreaView style={[commonStyles.screenContainer, { backgroundColor: theme.colors.secondary }]}>
        <BottomSheet
          snapPoints={snapPoints}
          index={0}
          handleComponent={null}
          style={styles.sheetContainer}
          backgroundStyle={{
            backgroundColor: theme.colors.primary_light,
          }}
        >
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <ChevronLeftIcon />
            </TouchableOpacity>
            <Text style={styles.headerText}>10 subject recommendations</Text>
          </View>
          <BottomSheetScrollView>
            <View style={styles.listContainer}>
              <Recommendation
                type="addedInsight"
                title="Best Tools For People With Dyslexia"
                description="In this article we explain what learning difficulties are with a specific section dedicated to dyslexia & explore challenges affecting individuals."
              />
              <Recommendation
                type="data"
                title="Best Tools For People With Dyslexia"
                description="In this article we explain what learning difficulties are with a specific section dedicated to dyslexia & explore challenges affecting individuals."
              />
              <Recommendation
                type="academicInsight"
                title="Best Tools For People With Dyslexia"
                description="In this article we explain what learning difficulties are with a specific section dedicated to dyslexia & explore challenges affecting individuals."
              />
              <Recommendation
                type="academicInsight"
                title="Best Tools For People With Dyslexia and ADHD"
                description="In this article we explain what learning difficulties are with a specific section dedicated to dyslexia & explore challenges affecting individuals."
              />
              <Recommendation
                type="academicInsight"
                title="Best Tools For People With Dyslexia and ADHD"
                description="In this article we explain what learning difficulties are with a specific section dedicated to dyslexia & explore challenges affecting individuals."
              />
              <Recommendation
                type="academicInsight"
                title="Best Tools For People With Dyslexia and ADHD"
                description="In this article we explain what learning difficulties are with a specific section dedicated to dyslexia & explore challenges affecting individuals."
              />
            </View>
          </BottomSheetScrollView>
        </BottomSheet>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  sheetContainer: {
    overflow: "hidden",
    borderRadius: 20,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 14,
    paddingHorizontal: 14,
    alignItems: "center",
  },
  backButton: {
    width: 34,
    height: 34,
    borderRadius: 34,
    backgroundColor: "#CAB675",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#836400",
    marginLeft: "23%",
  },
  listContainer: {
    paddingHorizontal: 14,
    gap: 17,
    marginBottom: 100,
  },
});

export default RecommendationsScreen;
