import { typeUseWallpaper } from "@/hooks/usewallpapers"
import { Image, StyleSheet, View } from "react-native"



export function ImageCard ({wallpaper}: {
    wallpaper: typeUseWallpaper
}) {
    return (
        <>
        <View>Image Card</View>
        <Image source={{uri: wallpaper.url}} style={styles.image}/>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 300
    }
})