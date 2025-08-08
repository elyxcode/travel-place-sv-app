import { Pressable, StyleSheet } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

export const BackButton = () => {
  return (
    <Pressable style={styles.container} onPress={() => router.back()}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    // backgroundColor: "rgba(255, 255, 255, 0.7)",
    backgroundColor: "#FFFFFFB3",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    top: 10,
    left: 10,
    zIndex: 9999,
  },
});
