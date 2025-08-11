import { Place } from "@/interfaces/place";
import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { BackButton } from "./BackButton";
import { CategoryTag } from "./CategoryTag";
import { placeholderImagePath } from "./PlaceCard";

interface Props {
  place: Place;
}

export const HeaderImageSection = ({ place }: Props) => {
  const [errorImage, setErrorImage] = useState(false);

  return (
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
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    width: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
});
