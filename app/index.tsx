import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";

import { HeaderList } from "@/components/HeaderList";
import LoadingComponent from "@/components/LoadingComponent";
import { PlaceCard } from "@/components/PlaceCard";
import { usePlaces } from "@/hooks/usePlace";
import { useStore } from "@/store";
import { colors } from "@/styles/colors";
import { useEffect } from "react";

const Separator = () => {
  return <View style={styles.separator} />;
};

const Footer = () => {
  return <View />;
};

export default function Index() {
  const { data, loading } = usePlaces();
  const { AddPlaces } = useStore();

  useEffect(() => {
    AddPlaces(data);
  }, [AddPlaces, data]);

  if (loading) return <LoadingComponent />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
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
