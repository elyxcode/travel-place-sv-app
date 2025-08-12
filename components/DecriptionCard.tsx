import { StyleSheet, Text, View } from "react-native";

import { Inter_400Regular } from "@expo-google-fonts/inter/400Regular";
import { Inter_700Bold } from "@expo-google-fonts/inter/700Bold";
import { useFonts } from "@expo-google-fonts/inter/useFonts";

interface Props {
  name: string;
  description: string;
}

export const DecriptionCard = ({ name, description }: Props) => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Inter_700Bold" }}>{name}</Text>
      <Text style={{ fontFamily: "Inter_400Regular" }}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
