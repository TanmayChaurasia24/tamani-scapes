import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function accountinfo() {
    return <SafeAreaView>
        <Link href={"/(tabs)/account"}>
            <Text>Back</Text>
        </Link>
    </SafeAreaView>
}