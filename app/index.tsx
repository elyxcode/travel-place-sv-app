import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

import { HeaderList } from "@/components/HeaderList";
import { PlaceCard } from "@/components/PlaceCard";
import { places } from "@/data/data";
import { colors } from "@/styles/colors";

const Separator = () => {
  return <View style={styles.separator} />;
};

const Footer = () => {
  return <View />;
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
        ListHeaderComponent={HeaderList}
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
