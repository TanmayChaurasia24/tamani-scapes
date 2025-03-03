import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { typeUseWallpaper, uselibraryWallpaper } from "@/hooks/usewallpapers";
import { SplitViewWallpapers } from "@/components/SplitViewWallpapers";
import { DownloadPicture } from "@/components/BottomSheet";
import { useState } from "react";

export default function Library({
  setselectedwallpapers,
}: {
  setselectedwallpapers: (wallpaper: typeUseWallpaper | null) => void;
}) {
  const wallpapers = uselibraryWallpaper();
  const [selectedWallpaper, setSelectedWallpaper] =
    useState<null | typeUseWallpaper>(null);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={[{ key: "content" }]}
        renderItem={() => (
          <View style={{ flex: 1 }}>
            <Text style={styles.headerText}>Library</Text>
            <SplitViewWallpapers
              wallpapers={wallpapers}
              setselectedwallpapers={setSelectedWallpaper}
            />
          </View>
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      />

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
    padding: 16,
    backgroundColor: "#000000", // Dark background
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#EAEAEA", // Light text for dark mode
  },
});
