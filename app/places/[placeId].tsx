import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";

import { placeholderImagePath } from "@/components/PlaceCard";

import { Place } from "@/interfaces/place";

import { BackButton } from "@/components/BackButton";
import { CategoryTag } from "@/components/CategoryTag";
import { places } from "@/data/data";
import { colors } from "@/styles/colors";

export default function PlaceDetails() {
  const { placeId } = useLocalSearchParams<{
    placeId: string;
  }>();

  const [errorImage, setErrorImage] = useState(false);

  const place: Place | undefined = places.find((p) => p.name === placeId);

  return (
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
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionLabel}>Descripción</Text>
          <Text style={styles.descriptionText}>{place?.description}</Text>
        </View>
        <View style={styles.galleryContainer}>
          <Text style={styles.galleryLabel}>Galeria</Text>
        </View>
        <Pressable>
          <View style={styles.externalLinkButton}>
            <EvilIcons name="external-link" size={26} color="black" />
            <Text style={styles.externalLinkText}>
              Visitar el sitio web oficial
            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
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
  galleryContainer: {
    height: 200,
  },
  galleryLabel: {
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "Inter_700Bold",
    color: colors.Black,
  },
  externalLinkButton: {
    borderWidth: 1,
    paddingVertical: 8,
    borderColor: colors.externalBorderButton,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  externalLinkText: {
    paddingTop: 3,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Inter_700Bold",
    color: colors.Black,
  },
});
