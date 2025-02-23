import React, { useCallback, useRef } from "react";
import { View, StyleSheet, Image, Button, useColorScheme, TouchableOpacity, Text } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

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
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? "light";

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("BottomSheet index:", index);
    if (index === -1) {
      onClose(); // Call onClose when bottom sheet is dismissed
    }
  }, [onClose]);

  const handleDownload = () => {
    console.log("Downloading:", wallpaper.url);
    // Add actual download logic here
  };

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={["90%"]}
      enablePanDownToClose={true}
      handleIndicatorStyle={{ display: "none" }}
      handleStyle={{ display: "none" }}
    >
      <BottomSheetView style={styles.contentContainer}>
        <View style={styles.topbar}>
          <TouchableOpacity onPress={onClose}>
            <Ionicons name={"close"} size={28} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name={"heart"} size={28} color={"white"} />
          </TouchableOpacity>
        </View>

        {/* Image */}
        <Image style={styles.image} source={{ uri: wallpaper.url }} />

        {/* Download Button */}
        <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
          <Ionicons name={"share"} size={18} color={"white"} style={{paddingRight:4}} />
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: "100%",
    height: "70%",
    borderRadius: 10,
    alignSelf: "center",
  },
  topbar: {
    position: "absolute",
    top: 15,
    left: 15,
    right: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 10,
  },
  downloadButton: {
    marginTop: 20,
    width: "60%",
    alignSelf: "center",
    backgroundColor: "black", // iOS-style blue button
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15, // Smooth rounded corners
    elevation: 10, // Android shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
