import { colors } from "@/styles/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GalleryImages } from "./GalleryImages";

import { Inter_700Bold } from "@expo-google-fonts/inter/700Bold";
import { useFonts } from "@expo-google-fonts/inter/useFonts";

interface Props {
  images: string[];
}

export const GallerySection = ({ images }: Props) => {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.galleryContainer}>
      <Text style={[styles.galleryLabel, { fontFamily: "Inter_700Bold" }]}>
        Galeria
      </Text>
      <GalleryImages images={images} />
    </View>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    height: 200,
    marginBottom: 15,
  },
  galleryLabel: {
    fontSize: 18,
    color: colors.Black,
    marginBottom: 15,
  },
});
