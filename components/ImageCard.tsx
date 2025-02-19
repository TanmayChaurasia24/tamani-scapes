import { typeUseWallpaper } from "@/hooks/usewallpapers";
import { Image, StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export function ImageCard({ wallpaper }: { wallpaper: typeUseWallpaper }) {
  const theme = useColorScheme() ?? "Light";

  return (
    <>
      <Image source={{ uri: wallpaper.url }} style={styles.image} />
      <View style={styles.labelcontainer}>
        <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
        <View style={styles.iconcontainer}>
          <Ionicons
            name={"heart"}
            size={18}
            color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  iconcontainer: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    height: 200,
    borderRadius: 20,
  },
  label: {
    color: "white",
  },
  labelcontainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
});
