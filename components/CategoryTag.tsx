import { colors } from "@/styles/colors";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

import { Inter_700Bold } from "@expo-google-fonts/inter/700Bold";
import { useFonts } from "@expo-google-fonts/inter/useFonts";

interface Props {
  category: string;
  extraStyles?: StyleProp<ViewStyle>;
  positionOposition?: boolean;
}

export const CategoryTag = ({
  category,
  extraStyles,
  positionOposition = false,
}: Props) => {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View
      style={[
        positionOposition ? styles.containerRight : styles.containerLeft,
        extraStyles,
      ]}
    >
      <Text style={[styles.text, { fontFamily: "Inter_700Bold" }]}>
        {category}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLeft: {
    position: "absolute",
    backgroundColor: colors.TagColor,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    top: 10,
    left: 10,
    zIndex: 9999,
  },
  containerRight: {
    position: "absolute",
    backgroundColor: colors.TagColor,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    top: 10,
    right: 10,
    zIndex: 9999,
  },
  text: {
    width: "100%",
    color: colors.Black,
  },
});
