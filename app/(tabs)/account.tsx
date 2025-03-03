import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      {/* Sign-in Buttons Section */}
      <View style={styles.authSection}>
        <AccountPageButtons label="Google" icon="logo-google" color="#EA4335" />
        <AccountPageButtons label="Facebook" icon="logo-facebook" color="#1877F2" />
        <AccountPageButtons label="GitHub" icon="logo-github" color="#EAEAEA" />
      </View>

      {/* Settings Section */}
      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <Text style={styles.sectionSubtitle}>Choose Theme</Text>
        <View style={styles.themeButtons}>
          <ThemeButton label="System" />
          <ThemeButton label="Light"/>
          <ThemeButton label="Dark" active />
        </View>
      </View>
    </SafeAreaView>
  );
}

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Panels</Text>
      <Text style={styles.headerSubtitle}>Sign In To Save Your Data</Text>
    </View>
  );
}

function AccountPageButtons({ label, icon, color }: { label: string; icon: any; color: string }) {
  return (
    <TouchableOpacity style={styles.authButton}>
      <Ionicons name={icon} size={20} color={color} style={{ marginRight: 8 }} />
      <Text style={styles.buttonText}>Sign in with {label}</Text>
    </TouchableOpacity>
  );
}

function ThemeButton({ label, active }: { label: string; active?: boolean }) {
  return (
    <TouchableOpacity style={[styles.themeButton, active && styles.activeThemeButton]}>
      <Text style={[styles.themeButtonText, active && styles.activeThemeButtonText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#EAEAEA",
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#BBBBBB",
    marginTop: 4,
  },
  authSection: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  authButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#292929",
    width: "90%",
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  buttonText: {
    color: "#EAEAEA",
    fontSize: 16,
    fontWeight: "bold",
  },
  settingsSection: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#EAEAEA",
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: "#BBBBBB",
    marginBottom: 15,
  },
  themeButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  themeButton: {
    backgroundColor: "#292929",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  activeThemeButton: {
    backgroundColor: "#FF6000",
  },
  themeButtonText: {
    color: "#EAEAEA",
    fontSize: 16,
    fontWeight: "bold",
  },
  activeThemeButtonText: {
    color: "#121212",
  },
});
