import { StyleSheet, TouchableOpacity } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

export const BackButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={() => router.back()}
    >
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "#FFFFFFB3",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    top: 10,
    left: 10,
    zIndex: 9999,
  },
});
