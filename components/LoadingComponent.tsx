import React from "react";
import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";

export default function LoadingComponent() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
