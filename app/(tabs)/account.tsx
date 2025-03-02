import { DownloadPicture } from "@/components/BottomSheet";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header/>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <AccountPageButtons label="Sign In" icon="logo-google" />
        <AccountPageButtons label="Sign In" icon="logo-facebook" />
        <AccountPageButtons label="Sign In" icon="logo-github" />
      </View>
    </SafeAreaView>
  );
}

function Header() {
  return <ThemedView>
    <ThemedText>Panels</ThemedText>
    <ThemedText>Sign In To Save Your Data</ThemedText>
  </ThemedView>
}

function AccountPageButtons({ label, icon }: { label: string; icon: any }) {
  return (
    <TouchableOpacity style={styles.downloadButton}>
      <Ionicons
        name={icon}
        size={18}
        color={"white"}
        style={{ paddingRight: 4 }}
      />
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
