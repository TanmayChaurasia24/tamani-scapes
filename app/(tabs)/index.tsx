import { DownloadPicture } from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SplitViewWallpapers } from "@/components/SplitViewWallpapers";
import { typeUseWallpaper, usewallpapers } from "@/hooks/usewallpapers";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  const wallpapers = usewallpapers();
  const [selectedwallpapers, setselectedwallpapers] =
    useState<null | typeUseWallpaper>(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/EcMvv68-Sh6oTu54Rh3S-Q",
            }}
          />
        }
      >
        <SplitViewWallpapers
          wallpapers={wallpapers}
          setselectedwallpapers={setselectedwallpapers}
        />
      </ParallaxScrollView>

      {selectedwallpapers && (
        <DownloadPicture
          wallpaper={selectedwallpapers}
          onClose={() => setselectedwallpapers(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
