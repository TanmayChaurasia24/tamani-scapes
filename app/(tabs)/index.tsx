import { DownloadPicture } from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { typeUseWallpaper, usewallpapers } from "@/hooks/usewallpapers";
import { useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  const wallpapers = usewallpapers();
  const [selectedwallpapers, setselectedwallpapers] = useState<null | typeUseWallpaper>(null)
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
        <View style={styles.container}>
          {/* Left Column */}
          <View style={styles.innerContainer}>
            <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard wallpaper={item} onPress={() => {
                    setselectedwallpapers(item)
                  }}/>
                </View>
              )}
              keyExtractor={(item, index) => item.name || index.toString()} 
            />
          </View>

          {/* Right Column */}
          <View style={styles.innerContainer}>
          <FlatList
              data={wallpapers.filter((_, index) => index % 2 === 1)}
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <ImageCard wallpaper={item} onPress={() => {
                    setselectedwallpapers(item)
                  }}/>
                </View>
              )}
              keyExtractor={(item, index) => item.name || index.toString()} 
            />
          </View>
        </View>
      </ParallaxScrollView>
      {selectedwallpapers && <DownloadPicture wallpaper={selectedwallpapers} onClose={() => setselectedwallpapers(null)}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    flex: 1,
  },
  innerContainer: {
    flex: 0.5,
    padding: 10,
    marginBottom: 10,
  },
  imageContainer: {
    paddingVertical: 10
  },
});
