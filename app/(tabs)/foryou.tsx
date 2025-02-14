import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function foryou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Liked" component={ProfileScreen} />
      <Tab.Screen name="Suggested" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>hi there from home page</Text>
    </SafeAreaView>
  );
}
function ProfileScreen() {
  return (
    <SafeAreaView>
      <Text>hi there from Profile page</Text>
    </SafeAreaView>
  );
}
