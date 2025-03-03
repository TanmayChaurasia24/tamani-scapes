import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import { typeUseWallpaper, useSuggestedWallpaper } from "@/hooks/usewallpapers";
  import { SplitViewWallpapers } from "@/components/SplitViewWallpapers";
  import { DownloadPicture } from "@/components/BottomSheet";
  import { useState } from "react";
  
  export default function Suggested({
    setselectedwallpapers,
  }: {
    setselectedwallpapers: (wallpaper: typeUseWallpaper | null) => void;
  }) {
    const wallpapers = useSuggestedWallpaper();
    const [selectedWallpaper, setSelectedWallpaper] =
      useState<null | typeUseWallpaper>(null);
  
    return (
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={[{ key: "content" }]}
          renderItem={() => (
            <View style={{ flex: 1 }}>
              <Text style={styles.headerText}>Suggested</Text>
              <SplitViewWallpapers
                wallpapers={wallpapers}
                setselectedwallpapers={setSelectedWallpaper} // Correctly passing selected state
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
      backgroundColor: "#000000",
    },
    headerText: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
      textAlign: "center",
      color: "#EAEAEA"
    },
  });
  