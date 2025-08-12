import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

import { HeaderList } from "@/components/HeaderList";
import { PlaceCard } from "@/components/PlaceCard";
import { places } from "@/data/data";
import { useStore } from "@/store";
import { colors } from "@/styles/colors";
import { useEffect, useState } from "react";
import LoadingComponent from "../components/LoadingComponent";

const Separator = () => {
  return <View style={styles.separator} />;
};

const Footer = () => {
  return <View />;
};

export default function Index() {
  const { Places, AddPlaces } = useStore();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    AddPlaces(places);

    setIsLoading(false);
  }, [isLoading, AddPlaces]);

  if (isLoading) return <LoadingComponent />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={Places}
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
