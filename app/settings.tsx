import { BackButton } from "@/components/BackButton";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <Text>Settings</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
