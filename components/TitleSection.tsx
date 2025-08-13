import { Place } from "@/interfaces/place";
import { colors } from "@/styles/colors";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Inter_400Regular } from "@expo-google-fonts/inter/400Regular";
import { Inter_700Bold } from "@expo-google-fonts/inter/700Bold";
import { useFonts } from "@expo-google-fonts/inter/useFonts";

interface Props {
  place: Place;
}

export const TitleSection = ({ place }: Props) => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.titleContainer}>
      <Text style={[styles.titleText, { fontFamily: "Inter_700Bold" }]}>
        {place?.name}
      </Text>
      <View style={styles.locationContainer}>
        <Feather name="map-pin" size={20} color="gray" />
        <Text style={[styles.locationText, { fontFamily: "Inter_400Regular" }]}>
          {place.location.address}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 20,
    color: colors.Black,
  },
  locationContainer: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  locationText: {
    flex: 1,
    color: colors.LocationTextColor,
  },
});
