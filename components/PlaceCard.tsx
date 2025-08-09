import { Image, Pressable, StyleSheet, View } from "react-native";

import { Place } from "@/interfaces/place";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { useState } from "react";
import { CategoryTag } from "./CategoryTag";
import { DecriptionCard } from "./DecriptionCard";

interface Props {
  place: Place;
}

export const placeholderImagePath = require("../assets/images/placeholder-image.png");

export const PlaceCard = ({ place }: Props) => {
  const [errorImage, setErrorImage] = useState(false);

  return (
    <Pressable
      onPress={() =>
        router.navigate({
          pathname: "/places/[placeId]",
          params: { placeId: place.name },
        })
      }
    >
      <View style={styles.cardShadow}>
        <View style={styles.cardContainer}>
          <CategoryTag category={place.category} />
          {!errorImage ? (
            <Image
              source={{
                uri: place.images[0],
              }}
              onError={() => setErrorImage(true)}
              style={styles.image}
            />
          ) : (
            <Image source={placeholderImagePath} style={styles.image} />
          )}

          <DecriptionCard name={place.name} description={place.description} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardShadow: {
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 15,
    elevation: 3,
  },
  cardContainer: {
    backgroundColor: colors.White,
    borderRadius: 15,
    borderColor: "#000",
    borderWidth: 0.1,
  },
  image: {
    height: 175,
    width: "100%",
    resizeMode: "cover",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
});
