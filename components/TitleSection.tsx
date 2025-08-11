import { Place } from "@/interfaces/place";
import { colors } from "@/styles/colors";
import Feather from "@expo/vector-icons/Feather";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  place: Place;
}

export const TitleSection = ({ place }: Props) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titleText}>{place?.name}</Text>
      <View style={styles.locationContainer}>
        <Feather name="map-pin" size={20} color="gray" />
        <Text style={styles.locationText}>{place.location.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    paddingBottom: 10,
    fontFamily: "Inter_700Bold",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 15,
    color: colors.Black,
  },
  locationContainer: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  locationText: {
    fontFamily: "Inter_400Regular",
    color: colors.LocationTextColor,
  },
});
