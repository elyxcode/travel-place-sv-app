import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { GallerySection } from "@/components/GallerySection";

import { Place } from "@/interfaces/place";

import { DescriptionSection } from "@/components/DescriptionSection";
import { HeaderImageSection } from "@/components/HeaderImageSection";
import { NativeAdComponent } from "@/components/NativeAdComponent";
import { TitleSection } from "@/components/TitleSection";
import { useStore } from "@/store";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PlaceDetails() {
  const insets = useSafeAreaInsets();
  const { placeId } = useLocalSearchParams<{
    placeId: string;
  }>();

  const { Places } = useStore();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  });

  const place: Place | undefined = Places.find((p) => p.id === placeId);

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <SafeAreaView
        style={[styles.safeContainer, { paddingBottom: insets.bottom }]}
      >
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <HeaderImageSection place={place!} />
          <View style={styles.placeDataContainer}>
            <TitleSection place={place!} />
            <DescriptionSection place={place} />
            <NativeAdComponent />
            <GallerySection images={place?.images ?? []} />
            {place?.externalLink && (
              <ExternalLinkButton
                uri={place?.externalLink}
                name="Visitar el sitio web oficial"
              />
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingVertical: 25,
  },

  placeDataContainer: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 70,
  },
});
