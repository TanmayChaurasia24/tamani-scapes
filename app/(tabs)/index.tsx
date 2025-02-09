import { Link } from "expo-router"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function foryou (){
    return <SafeAreaView>
        <Link href={"/suggested"}>
            <Text>Suggested</Text>
        </Link>
        <Link href={"/liked"}>
            <Text>Liked</Text>
        </Link>
        <Link href={"/library"}>
            <Text>Library</Text>
        </Link>
        <Text>for you page</Text>
    </SafeAreaView>
}