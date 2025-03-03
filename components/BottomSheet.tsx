import React, { useCallback, useRef } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text, useColorScheme } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";

type TypeUseWallpaper = {
  url: string;
};

export const DownloadPicture = ({
  onClose,
  wallpaper,
}: {
  onClose: () => void;
  wallpaper: TypeUseWallpaper;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? "light";

  const handleSheetChanges = useCallback((index: number) => {
    console.log("BottomSheet index:", index);
    if (index === -1) {
      onClose();
    }
  }, [onClose]);

  const handleDownload = () => {
    console.log("Downloading:", wallpaper.url);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={["90%"]}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{display: "none"}}
    >
      <BottomSheetView style={styles.contentContainer}>
        {/* Topbar */}
        <View style={styles.topbar}>
          <TouchableOpacity onPress={onClose} style={styles.iconButton}>
            <Ionicons name={"close"} size={28} color={"#FFF"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name={"heart"} size={28} color={"#FFF"} />
          </TouchableOpacity>
        </View>

        {/* Image Display */}
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: wallpaper.url }} />
        </View>

        {/* Download Button */}
        <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
          <Ionicons name={"cloud-download"} size={22} color={"white"} style={{ paddingRight: 8 }} />
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: "#0C0C0C", // Semi-transparent dark mode
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  handle: {
    backgroundColor: "transparent",
    alignItems: "center",
    paddingVertical: 5,
  },
  topbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 15,
    left: 20,
    right: 20,
    zIndex: 10,
  },
  iconButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: 10,
    borderRadius: 50,
  },
  imageContainer: {
    width: "100%",
    height: "65%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  downloadButton: {
    marginTop: 25,
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#FF6000",
    paddingVertical: 14,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#FF6000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});
