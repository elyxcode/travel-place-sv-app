import { colors } from "@/styles/colors";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

interface Props {
  category: string;
  extraStyles?: StyleProp<ViewStyle>;
}

export const CategoryTag = ({ category, extraStyles }: Props) => {
  return (
    <View style={[styles.container, extraStyles]}>
      <Text style={styles.text}>{category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: colors.TagColor,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    top: 10,
    left: 10,
    zIndex: 9999,
  },
  text: {
    color: colors.Black,
    fontFamily: "Inter_500Medium",
    fontWeight: "bold",
  },
});
