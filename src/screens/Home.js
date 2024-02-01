import React, { useMemo, useRef, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
import SystemNavigationBar from 'react-native-system-navigation-bar';
import commonStyles from "../commonStyles";
import theme from "../theme";
import StyloSmallIcon from "../icons/StyloSmall";
import BottomSheet from "@gorhom/bottom-sheet";
import AddButton from "../components/AddButton";
import GetStartedIcon from "../icons/GetStarted";
import SquiglyArrowIcon from "../icons/SquiglyArrow";
import OptionsSheet from "../components/OptionsSheet";
import NewDocumentSheet from "../components/NewDocumentSheet";
import WebsiteLinkSheet from "../components/WebsiteLinkSheet";
import AudioRecordingSheet from "../components/AudioRecordingSheet";
import GeneratingSheet from "../components/GeneratingSheet";

function HomeScreen({ navigation }) {
  const [isDocumentGenerating, setIsDocumentGenerating] = useState(false);
  const optionsSheetRef = useRef();
  const websiteLinkSheet = useRef();
  const newDocumentSheetRef = useRef();
  const audioRecordingSheetRef = useRef();
  const generatingSheetRef = useRef();

  const snapPoints = useMemo(() => ["85%"]);

  useEffect(() => {
    SystemNavigationBar.setNavigationColor("transparent");
    SystemNavigationBar.setBarMode('dark', 'navigation');
  }, []);

  const handleOptionSheetSelect = (option) => {
    optionsSheetRef.current?.close();

    switch (option) {
      case "websiteLink":
        websiteLinkSheet.current?.expand();
        break;
      case "newDocument":
        newDocumentSheetRef.current?.expand();
        break;
      case "audioRecording":
        audioRecordingSheetRef.current?.expand();
        break;
      case "powerOff":
        navigation.navigate("Login");
        break;
      default:
        break;
    }
  }

  const handleSiteGeneration = (site) => {
    websiteLinkSheet.current?.close();
    setIsDocumentGenerating(true);
    generatingSheetRef.current?.expand();
  }

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={"transparent"}
      />
      <SafeAreaView style={[commonStyles.screenContainer, { backgroundColor: theme.colors.secondary}]}>
        <View style={commonStyles.horizontallyCentered}>
          <StyloSmallIcon />
        </View>

        <BottomSheet
          snapPoints={snapPoints}
          index={0}
          handleComponent={() => null}
          style={{ overflow: "hidden", borderRadius: 25 }}
        >
          <View style={styles.menuContainer}>
            <Text style={styles.title}>Let's get started, click the <AddButton size="sm" /> to create your first Stylo card</Text>
            <GetStartedIcon style={{ marginTop: 20 }} />
            <SquiglyArrowIcon style={{ marginLeft: 90 }} />
            <AddButton
              size="lg"
              onPress={() => {
                optionsSheetRef.current?.expand();
              }}
            />
          </View>
        </BottomSheet>
      </SafeAreaView>
      <OptionsSheet
        innerRef={optionsSheetRef}
        onSelect={handleOptionSheetSelect}
        onClose={() => optionsSheetRef.current?.close()}
      />
      <WebsiteLinkSheet
        innerRef={websiteLinkSheet}
        onGenerate={handleSiteGeneration}
      />
      <NewDocumentSheet
        innerRef={newDocumentSheetRef}
      />
      <AudioRecordingSheet
        innerRef={audioRecordingSheetRef}
      />
      <GeneratingSheet
        innerRef={generatingSheetRef}
        onGenerated={() => navigation.navigate("NewDocument")}
        isDocumentGenerating={isDocumentGenerating}
      />
    </>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
    lineHeight: 20,
    width: 300,
    textAlign: "center",
  },
});

export default HomeScreen;
