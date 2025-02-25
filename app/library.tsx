import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { typeUseWallpaper, usewallpapers } from "@/hooks/usewallpapers";
import { SplitViewWallpapers } from "@/components/SplitViewWallpapers";
import { DownloadPicture } from "@/components/BottomSheet";
import { useState, useEffect } from "react";

export default function Library() {
  const wallpapers = usewallpapers();
  const [selectedWallpaper, setSelectedWallpaper] =
    useState<null | typeUseWallpaper>(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>Library Screen</Text>

      <View>
      <Text>Library Screen</Text>
        {wallpapers.length > 0 ? (
          <SplitViewWallpapers
            wallpapers={wallpapers}
            setselectedwallpapers={setSelectedWallpaper}
          />
        ) : (
          <Text>No wallpapers found!</Text>
        )}
      </View>

      {selectedWallpaper && (
        <DownloadPicture
          wallpaper={selectedWallpaper}
          onClose={() => setSelectedWallpaper(null)}
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