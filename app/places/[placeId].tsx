import { useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Feather from "@expo/vector-icons/Feather";

import { BackButton } from "@/components/BackButton";
import { CategoryTag } from "@/components/CategoryTag";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { GallerySection } from "@/components/GallerySection";
import { placeholderImagePath } from "@/components/PlaceCard";

import { Place } from "@/interfaces/place";

import { places } from "@/data/data";

import { DescriptionSection } from "@/components/DescriptionSection";
import { colors } from "@/styles/colors";

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

  const [errorImage, setErrorImage] = useState(false);

  const place: Place | undefined = places.find((p) => p.name === placeId);

  return (
    <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <BackButton />
          <CategoryTag category={place?.category ?? ""} positionOposition />
          {!errorImage ? (
            <Image
              source={{
                uri: place?.images[0],
              }}
              onError={() => setErrorImage(true)}
              style={styles.image}
            />
          ) : (
            <Image source={placeholderImagePath} style={styles.image} />
          )}
        </View>
        <View style={styles.placeDataContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{place?.name}</Text>
            <View style={styles.locationContainer}>
              <Feather name="map-pin" size={20} color="gray" />
              <Text style={styles.locationText}>El Salvador</Text>
            </View>
          </View>
          <DescriptionSection place={place} />
          <GallerySection images={images} />
          <ExternalLinkButton />
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
  imageContainer: {
    height: 200,
    width: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  placeDataContainer: {
    paddingTop: 15,
    paddingHorizontal: 15,
  },
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
