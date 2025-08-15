import { Inter_800ExtraBold } from "@expo-google-fonts/inter/800ExtraBold";
import { Inter_900Black } from "@expo-google-fonts/inter/900Black";
import { useFonts } from "@expo-google-fonts/inter/useFonts";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

export const HeaderList = () => {
  let [fontsLoaded] = useFonts({
    Inter_800ExtraBold,
    Inter_900Black,
  });

  if (!fontsLoaded) return null;

  return (
    <Pressable
      style={styles.headerContainer}
      onPress={() => {
        router.navigate("/settings");
      }}
    >
      <Text style={[styles.HeaderText, { fontFamily: "Inter_800ExtraBold" }]}>
        Sitios Para Visitar{" "}
      </Text>
      <FontAwesome name="gear" size={26} color="black" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 25,
    paddingLeft: 5,
    height: 50,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  HeaderText: {
    paddingTop: 5,
    fontSize: 25,
  },
});
