import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Library from "../library"; 
import Liked from "../liked";
import Suggested from "../suggested";
import { useState } from "react";
import { typeUseWallpaper } from "@/hooks/usewallpapers";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  const [selectedWallpapers, setSelectedWallpapers] =
    useState<null | typeUseWallpaper>(null);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#212121", 
        },
        tabBarIndicatorStyle: { backgroundColor: "#FF6000" },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#A0A0A0",
      }}
    >
      <Tab.Screen
        name="Library"
        children={() => <Library setselectedwallpapers={setSelectedWallpapers} />}
      />
      <Tab.Screen
        name="Liked"
        children={() => <Liked setselectedwallpapers={setSelectedWallpapers} />}
      />
      <Tab.Screen
        name="Suggested"
        children={() => <Suggested setselectedwallpapers={setSelectedWallpapers} />}
      />
    </Tab.Navigator>
  );
}
