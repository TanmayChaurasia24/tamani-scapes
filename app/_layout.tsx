import { Text, View } from "react-native";
import { Link, Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView>
      <View
        style={{
          height: "90%",
        }}
      >
        <Slot />
      </View>
      <View
        style={{
          backgroundColor: "yellow",
        }}
      >
        <Link href={"/"}>
          <Text>For You</Text>
        </Link>
        <Link href={"/account"}>
          <Text>accounts</Text>
        </Link>
        <Link href={"/explore"}>
          <Text>explore</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
