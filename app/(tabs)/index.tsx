// cover image
// https://ideogram.ai/assets/progressive-image/balanced/response/G5wFGOj5TDuSgR82IwlHhA

import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { typeUseWallpaper, usewallpapers } from "@/hooks/usewallpapers";
import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
  const wallpapers = usewallpapers();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: "https://ideogram.ai/assets/progressive-image/balanced/response/rXUv9c6gTgWqdctcA_yyog",
            }}
          />
        }
      >
        {wallpapers.map((w: typeUseWallpaper) => (
          <ImageCard wallpaper={w} />
        ))}
      </ParallaxScrollView>
    </SafeAreaView>
  );
}
