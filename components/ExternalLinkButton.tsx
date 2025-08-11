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

interface Props {
  uri: string;
}

export const ExternalLinkButton = ({ uri }: Props) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(uri);

    if (supported) await Linking.openURL(uri);
  }, [uri]);

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
      <View style={styles.externalLinkButton}>
        <EvilIcons name="external-link" size={26} color="black" />
        <Text style={styles.externalLinkText}>
          Visitar el sitio web oficial
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
    fontWeight: "bold",
    fontFamily: "Inter_700Bold",
    color: colors.Black,
  },
});
