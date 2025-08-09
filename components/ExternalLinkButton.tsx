import { colors } from "@/styles/colors";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  uri?: string;
}

export const ExternalLinkButton = ({ uri }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
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
