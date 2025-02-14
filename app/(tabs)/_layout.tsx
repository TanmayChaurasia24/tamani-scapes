// sample wallpaers link
// https://ideogram.ai/assets/progressive-image/balanced/response/0AoDd-zsT-yCp6clFSBJeg
// https://ideogram.ai/assets/progressive-image/balanced/response/fclgnXKRSo2lj_G9F2IUZQ
// https://ideogram.ai/assets/progressive-image/balanced/response/zvf-giD5QKis955KA__q6g
// https://ideogram.ai/assets/progressive-image/balanced/response/rXUv9c6gTgWqdctcA_yyog

// cover image
// https://ideogram.ai/assets/progressive-image/balanced/response/G5wFGOj5TDuSgR82IwlHhA



import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      <Tabs.Screen
        name="foryou"
        options={{
          title: "For you",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="exchange" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
