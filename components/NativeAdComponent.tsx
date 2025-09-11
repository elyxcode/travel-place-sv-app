import config from "@/config";
import React, { useEffect, useState } from "react";
import { Image, Text } from "react-native";
import {
  NativeAd,
  NativeAdView,
  TestIds,
} from "react-native-google-mobile-ads";

export const NativeAdComponent = () => {
  const [nativeAd, setNativeAd] = useState<NativeAd>();

  useEffect(() => {
    NativeAd.createForAdRequest(
      __DEV__ ? TestIds.NATIVE : config.ADMOD_ADUNITID_NATIVE
    )
      .then(setNativeAd)
      .catch(console.error);
  }, []);

  if (!nativeAd) {
    return null;
  }
  return (
    <NativeAdView
      nativeAd={nativeAd}
      style={{
        marginVertical: 10,
        padding: 12,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#ccc",
      }}
    >
      {nativeAd.images && (
        <Image
          source={{ uri: nativeAd.images[0].url }}
          style={{ width: "100%", height: 120, borderRadius: 8 }}
          resizeMode="cover"
        />
      )}
      <Text style={{ fontWeight: "bold", marginTop: 6 }}>
        {nativeAd.headline}
      </Text>
      {nativeAd.body && (
        <Text style={{ color: "gray", marginVertical: 4 }}>
          {nativeAd.body}
        </Text>
      )}
      {nativeAd.advertiser && (
        <Text style={{ fontSize: 12, color: "blue" }}>
          {nativeAd.advertiser}
        </Text>
      )}
    </NativeAdView>
  );
};
