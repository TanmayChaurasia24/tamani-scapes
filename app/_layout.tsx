import { Slot, Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="(nobottombar)/accountinfo"
          options={{
            headerShown: true,
            headerTitle: "Account info",
            headerBackTitle: "Back",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
