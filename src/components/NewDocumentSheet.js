import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import MidSheet from "./MidSheet";
import DocIcon from "../icons/Doc";
import PencilIcon from "../icons/Pencil";
import DownloadIcon from "../icons/Download";
import DeleteIcon from "../icons/Delete";


function NewDocumentSheet({ innerRef }) {
  return (
    <MidSheet
      innerRef={innerRef}
    >
      <View style={styles.header}>
        <DocIcon />
        <Text style={styles.headerText}>New Doc</Text>
      </View>
      <TouchableOpacity style={styles.option}>
        <PencilIcon />
        <Text style={styles.optionText}>Rename</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <DownloadIcon />
        <Text style={styles.optionText}>Download Audio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <DeleteIcon />
        <Text style={[styles.optionText, { color: "#B72828" }]}>Delete</Text>
      </TouchableOpacity>
    </MidSheet>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
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
  option: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 25,
  },
  optionText: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 20,
  },
});

export default NewDocumentSheet;
