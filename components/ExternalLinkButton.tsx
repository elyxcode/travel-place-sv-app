import { colors } from "@/styles/colors";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React, { useCallback } from "react";
import {
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Inter_700Bold } from "@expo-google-fonts/inter/700Bold";
import { useFonts } from "@expo-google-fonts/inter/useFonts";

interface Props {
  uri: string;
  name: string;
}

export const ExternalLinkButton = ({ uri, name }: Props) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(uri);

    if (supported) await Linking.openURL(uri);
  }, [uri]);

  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
      <View style={styles.externalLinkButton}>
        <EvilIcons name="external-link" size={26} color="black" />
        <Text
          style={[styles.externalLinkText, { fontFamily: "Inter_700Bold" }]}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 14,
    color: colors.Black,
  },
});
