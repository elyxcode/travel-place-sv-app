import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";

import { EmptyList } from "@/components/EmptyList";
import { FooterListComponent } from "@/components/FooterListComponent";
import { HeaderList } from "@/components/HeaderList";
import LoadingComponent from "@/components/LoadingComponent";
import { NativeAdComponent } from "@/components/NativeAdComponent";
import { PlaceCard } from "@/components/PlaceCard";
import { SeparatorListComponent } from "@/components/SeparatorListComponent";
import config from "@/config";
import { usePlaces } from "@/hooks/usePlace";
import { Place } from "@/interfaces/place";
// import { useStore } from "@/store";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  AdEventType,
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  TestIds,
} from "react-native-google-mobile-ads";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const interstitial = InterstitialAd.createForAdRequest(
  __DEV__ ? TestIds.INTERSTITIAL : config.ADMOD_ADUNITID,
  {
    requestNonPersonalizedAdsOnly: true,
  }
);

export default function Index() {
  const insets = useSafeAreaInsets();
  // const { AddPlaces } = useStore();
  const { data, loading } = usePlaces();

  const [adLoaded, setAdLoaded] = useState(false);
  const [visitCount, setVisitCount] = useState(0);

  // uso de zunstand para otra feature de la app.
  // useEffect(() => {
  //   AddPlaces(data);
  // }, [AddPlaces, data]);

  useEffect(() => {
    // Listener para cuando el anuncio esté cargado
    const unsubscribeLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        console.log("Interstitial cargado");
        setAdLoaded(true);
      }
    );

    // Listener para cuando se cierre el anuncio
    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        console.log("Interstitial cerrado, recargando...");
        setAdLoaded(false);
        interstitial.load(); // Recargar
      }
    );

    // Listener para errores
    const unsubscribeError = interstitial.addAdEventListener(
      AdEventType.ERROR,
      (err) => {
        console.log("Error al cargar interstitial:", err);
        setAdLoaded(false);
        // Intentar cargar de nuevo
        setTimeout(() => interstitial.load(), 10000); // reintenta en 10s
      }
    );

    // Primera carga
    interstitial.load();

    return () => {
      unsubscribeLoaded();
      unsubscribeClosed();
      unsubscribeError();
    };
  }, []);

  const openPlace = (place: Place) => {
    // Incrementar visitas
    const newCount = visitCount + 1;
    setVisitCount(newCount);

    // Si ya vio 3 lugares, mostrar interstitial (si está cargado)
    if (newCount % 4 === 0 && adLoaded) {
      interstitial.show();
      setAdLoaded(false);
    }

    // Aquí pondrías la navegación hacia la pantalla de detalle
    router.navigate({
      pathname: "/places/[placeId]",
      params: { placeId: place.id },
    });
  };

  if (loading) return <LoadingComponent />;

  if (!data) return <EmptyList />;

  return (
    <SafeAreaView style={[styles.container, { paddingBottom: insets.bottom }]}>
      <FlatList
        style={styles.list}
        data={data}
        ListEmptyComponent={<EmptyList />}
        renderItem={({ item, index }) => {
          if ((index + 1) % 4 === 0) {
            return (
              <>
                <Pressable onPress={() => openPlace(item)}>
                  <PlaceCard place={item} />
                </Pressable>
                <NativeAdComponent />
              </>
            );
          }
          return (
            <Pressable onPress={() => openPlace(item)}>
              <PlaceCard place={item} />
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={SeparatorListComponent}
        ListFooterComponent={FooterListComponent}
        ListFooterComponentStyle={{ height: 25 }}
        ListHeaderComponent={HeaderList}
      />
      <View>
        <BannerAd
          unitId={__DEV__ ? TestIds.BANNER : config.ADMOD_ADUNITID}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },

  list: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
