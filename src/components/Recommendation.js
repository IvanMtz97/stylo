import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import theme from "../theme";
import PlanetIcon from "../icons/Planet";
import PlusIcon from "../icons/Plus";
import ActivityIcon from "../icons/Activity";
import AcademicInsightIcon from "../icons/AcademicInsight";

const Types = {
  addedInsight: {
    icon: <PlanetIcon />,
    label: "Added Insight"
  },
  data: {
    icon: <ActivityIcon />,
    label: "Data",
  },
  academicInsight: {
    icon: <AcademicInsightIcon />,
    label: "Academic Insight",
  },
}

function Recommendation({ type, title, description }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.headerContainer}>
        {Types[type].icon}
        <Text style={styles.headerText}>{Types[type].label}</Text>
        <TouchableOpacity style={styles.headerButton}>
          <PlusIcon />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 10,
    elevation: 7,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    backgroundColor: theme.colors.primary_lighter,
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    color: "#838383",
    fontSize: 10,
    fontWeight: "500",
    marginLeft: 6,
  },
  headerButton: {
    width: 34,
    height: 34,
    borderRadius: 100,
    backgroundColor: "#FFD13D",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
  },
  title: {
    color: "black",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 13,
  },
  description: {
    color: "black",
    fontSize: 10,
    fontWeight: "500",
    marginTop: 13,
    marginBottom: 5,
  },
});

export default Recommendation;
