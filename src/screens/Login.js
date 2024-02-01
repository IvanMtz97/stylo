import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, StatusBar } from "react-native";
import SystemNavigationBar from 'react-native-system-navigation-bar';
import commonStyles from "../commonStyles";
import StyloLargeIcon from "../icons/StyloLarge";
import LoginLogo from "../icons/LoginLogo";
import theme from "../theme";

function LoginScreen({ navigation }) {
  useEffect(() => {
    SystemNavigationBar.setNavigationColor("transparent");
    SystemNavigationBar.setBarMode('dark', 'navigation');
  }, []);

  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={"transparent"}
      />
      <SafeAreaView style={commonStyles.screenContainer}>
        <View style={[commonStyles.container, commonStyles.centered]}>
          <StyloLargeIcon />
          <Text style={styles.title}>Rapid learning and note taking powered AI</Text>
          <LoginLogo style={{ marginTop: 58 }} />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={[styles.button, commonStyles.centered]}>
              <Text style={styles.buttonText}>Sign up or sign in</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.laterButton, commonStyles.centered]}
              onPress={() => navigation.navigate("Home")}
            >
              <Text>I'll do it later</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 18
  },
  buttonsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 40,
  },
  button: {
    width: "100%",
    height: 56,
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
  },
  buttonText: {
    color: theme.colors.primary_light,
    fontSize: 15,
    fontWeight: "600",
  },
  laterButton: {
    width: "100%",
    height: 56,
    marginTop: 15,
  },
});

export default LoginScreen;
