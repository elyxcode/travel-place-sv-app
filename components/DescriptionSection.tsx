import { Place } from "@/interfaces/place";
import { colors } from "@/styles/colors";
import { StyleSheet, Text, View } from "react-native";

import { Inter_400Regular } from "@expo-google-fonts/inter/400Regular";
import { Inter_700Bold } from "@expo-google-fonts/inter/700Bold";
import { useFonts } from "@expo-google-fonts/inter/useFonts";

interface Props {
  place?: Place;
}

export const DescriptionSection = ({ place }: Props) => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.descriptionContainer}>
      <Text style={[styles.descriptionLabel, { fontFamily: "Inter_700Bold" }]}>
        Descripción
      </Text>
      <Text
        style={[styles.descriptionText, { fontFamily: "Inter_400Regular" }]}
      >
        {place?.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    paddingBottom: 20,
  },
  descriptionLabel: {
    paddingBottom: 10,
    fontSize: 18,
    color: colors.Black,
  },
  descriptionText: {
    color: colors.DescriptionColor,
    fontSize: 14,
  },
});
