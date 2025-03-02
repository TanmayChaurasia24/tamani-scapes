import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Library from "../library"; // Ensure proper casing
import Liked from "../liked";
import Suggested from "../suggested";
import { useState } from "react";
import { typeUseWallpaper } from "@/hooks/usewallpapers";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  const [selectedWallpapers, setSelectedWallpapers] =
    useState<null | typeUseWallpaper>(null);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Library"
        component={() => (
          <Library setselectedwallpapers={setSelectedWallpapers} />
        )}
      />
      <Tab.Screen
        name="Liked"
        component={() => (
          <Liked setselectedwallpapers={setSelectedWallpapers} />
        )}
      />
      <Tab.Screen
        name="Suggested"
        component={() => (
          <Suggested setselectedwallpapers={setSelectedWallpapers} />
        )}
      />
    </Tab.Navigator>
  );
}
