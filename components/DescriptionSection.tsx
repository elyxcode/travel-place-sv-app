import { Place } from "@/interfaces/place";
import { colors } from "@/styles/colors";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  place?: Place;
}

export const DescriptionSection = ({ place }: Props) => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionLabel}>Descripción</Text>
      <Text style={styles.descriptionText}>{place?.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    paddingBottom: 20,
  },
  descriptionLabel: {
    paddingBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    color: colors.Black,
  },
  descriptionText: {
    fontFamily: "Inter_400Regular",
    color: colors.DescriptionColor,
    fontSize: 14,
  },
});
