import { colors } from "@/styles/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GalleryImages } from "./GalleryImages";

interface Props {
  images: string[];
}

export const GallerySection = ({ images }: Props) => {
  return (
    <View style={styles.galleryContainer}>
      <Text style={styles.galleryLabel}>Galeria</Text>
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
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Inter_700Bold",
    color: colors.Black,
    marginBottom: 15,
  },
});
