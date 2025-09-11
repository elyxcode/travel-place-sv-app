import { BackButton } from "@/components/BackButton";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { policyUri } from "@/constants/resources";
import { colors } from "@/styles/colors";
import * as Application from "expo-application";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Settings() {
  const version = Application.nativeApplicationVersion;
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <View style={styles.containerLink}>
        <ExternalLinkButton uri={policyUri} name="Politicas de privacidad" />
      </View>
      <Text style={styles.versionText}>v{version}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
  },
  containerLink: {
    gap: 10,
    paddingHorizontal: 30,
  },
  versionText: {
    position: "absolute",
    bottom: 10,
    right: 10,
    fontSize: 12,
    color: colors.graySemiTransparent,
  },
});
