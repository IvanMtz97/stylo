import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 50,
  },
  container: {
    flex: 1,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  horizontallyCentered: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default commonStyles;
