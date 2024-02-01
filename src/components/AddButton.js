import { View, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../theme";
import PlusIcon from "../icons/Plus";

function AddButton(props) {
  const sizes = {
    sm: styles.small,
    lg: styles.large
  };

  const iconSizes = {
    sm: "8",
    lg: "16",
  };

  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, sizes[props.size]]}>
      <PlusIcon size={iconSizes[props.size]} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.secondary,
  },
  small: {
    width: 24,
    height: 24,
    borderRadius: 25,
  },
  large: {
    width: 56,
    height: 56,
    borderRadius: 20,
    elevation: 10,
    shadowColor: "rgba(255, 209, 61, 0.77)",
  },
});

export default AddButton;
