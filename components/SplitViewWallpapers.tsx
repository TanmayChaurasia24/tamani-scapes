import { ImageCard } from "@/components/ImageCard";
import { typeUseWallpaper } from "@/hooks/usewallpapers";
import { FlatList, StyleSheet, View } from "react-native";

export function SplitViewWallpapers({
  wallpapers,
  setselectedwallpapers,
}: {
  wallpapers: typeUseWallpaper[];
  setselectedwallpapers: (wallpaper: typeUseWallpaper | null) => void;
}) {
  return (
    <View style={styles.container}>
      {/* Left Column */}
      <View style={styles.innerContainer}>
        <FlatList
          data={wallpapers.filter((_, index) => index % 2 === 0)}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <ImageCard wallpaper={item} onPress={() => setselectedwallpapers(item)} />
            </View>
          )}
        />
      </View>

      {/* Right Column */}
      <View style={styles.innerContainer}>
        <FlatList
          data={wallpapers.filter((_, index) => index % 2 === 1)}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <ImageCard wallpaper={item} onPress={() => setselectedwallpapers(item)} />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    paddingVertical: 10,
  },
});
