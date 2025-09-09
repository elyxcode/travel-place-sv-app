import { BackButton } from "@/components/BackButton";
import { ExternalLinkButton } from "@/components/ExternalLinkButton";
import { policyUri } from "@/constants/resources";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <View style={styles.containerLink}>
        <ExternalLinkButton uri={policyUri} name="Politicas de privacidad" />
      </View>
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
});
