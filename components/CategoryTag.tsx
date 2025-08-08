import { colors } from "@/styles/colors";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

interface Props {
  category: string;
  extraStyles?: StyleProp<ViewStyle>;
  positionOposition: boolean;
}

export const CategoryTag = ({
  category,
  extraStyles,
  positionOposition = false,
}: Props) => {
  return (
    <View
      style={[
        positionOposition ? styles.containerRight : styles.containerLeft,
        extraStyles,
      ]}
    >
      <Text style={styles.text}>{category}</Text>
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
    color: colors.Black,
    fontFamily: "Inter_500Medium",
    fontWeight: "bold",
  },
});
