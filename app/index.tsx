import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

import { PlaceCard } from "@/components/PlaceCard";
import { places } from "@/data/data";
import { colors } from "@/styles/colors";

const Separator = () => {
  return <View style={styles.separator} />;
};

const Footer = () => {
  return <View />;
};

const Header = () => {
  return <View style={styles.separator} />;
};

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={places}
        renderItem={({ item }) => <PlaceCard place={item} />}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={Separator}
        ListFooterComponent={Footer}
        ListFooterComponentStyle={{ height: 25 }}
        ListHeaderComponent={Header}
        ListHeaderComponentStyle={{ height: 25 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  separator: {
    height: 15,
  },
  list: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
