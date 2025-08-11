import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, ScrollView, StyleSheet, View } from "react-native";

import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { GallerySection } from "@/components/GallerySection";

import { Place } from "@/interfaces/place";

import { places } from "@/data/data";

import { DescriptionSection } from "@/components/DescriptionSection";
import { HeaderImageSection } from "@/components/HeaderImageSection";
import { TitleSection } from "@/components/TitleSection";

const images = [
  "https://images.pexels.com/photos/13268478/pexels-photo-13268478.jpeg",
  "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg",
  "https://images.pexels.com/photos/1024864/pexels-photo-1024864.jpeg",
];

export default function PlaceDetails() {
  const { placeId } = useLocalSearchParams<{
    placeId: string;
  }>();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  });

  const place: Place | undefined = places.find((p) => p.name === placeId);

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <ScrollView style={styles.container}>
        <HeaderImageSection place={place!} />
        <View style={styles.placeDataContainer}>
          <TitleSection place={place!} />
          <DescriptionSection place={place} />
          <GallerySection images={images} />
          {place?.externalLink && (
            <ExternalLinkButton uri={place?.externalLink} />
          )}
        </View>
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
  },

  placeDataContainer: {
    paddingTop: 15,
    paddingHorizontal: 15,
  },
});
