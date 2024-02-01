import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from "react-native";
import MidSheet from "./MidSheet";
import LinkIcon from "../icons/Link";
import theme from "../theme";


function WebsiteLinkSheet({ innerRef, onGenerate }) {
  const [link, setLink] = useState("");
  return (
    <MidSheet
      innerRef={innerRef}
    >
      <View style={styles.header}>
        <LinkIcon />
        <Text style={styles.headerText}>WEBSITE LINK</Text>
      </View>
      <Text style={styles.title}>Paste any website link to listen</Text>
      <View style={{ paddingHorizontal:  17 }}>
        <TextInput
          style={styles.input}
          onChangeText={setLink}
          placeholder="any-website.com"
          value={link}
        />
        <TouchableOpacity
          onPress={() => onGenerate(link)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Generating</Text>
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
  input: {
    width: "100%",
    height: 54,
    borderRadius: 10,
    backgroundColor: "#F7F7F7",
    marginTop: 27,
    textAlign: "center",
  },
  button: {
    width: "100%",
    height: 54,
    borderRadius: 10,
    backgroundColor: "black",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.primary_light,
    fontSize: 15,
    fontWeight: "600",
  },
});

export default WebsiteLinkSheet;
