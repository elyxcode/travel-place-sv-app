import { Inter_800ExtraBold } from "@expo-google-fonts/inter/800ExtraBold";
import { Inter_900Black } from "@expo-google-fonts/inter/900Black";
import { useFonts } from "@expo-google-fonts/inter/useFonts";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const HeaderList = () => {
  let [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) return <Text>NO se cargo</Text>;

  return (
    <View style={styles.headerContainer}>
      <Text style={[styles.HeaderText, { fontFamily: "Inter_800ExtraBold" }]}>
        Sitios Para Visitar{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 25,
    paddingLeft: 5,
    height: 50,
    marginBottom: 8,
  },
  HeaderText: {
    paddingTop: 5,
    fontSize: 28,
  },
});
