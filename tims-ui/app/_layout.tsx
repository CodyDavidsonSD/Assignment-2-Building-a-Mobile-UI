import { Stack } from "expo-router";
import TopNav from "./components/TopNav";
import { View } from "react-native";
import BottomNav from "./components/BottomNav";

export default function RootLayout() {
  return (
  <>
    <TopNav/>
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
    </Stack>
    <View className="bg-white mt-auto">
        <BottomNav />
    </View>
  </>
  )
  
}
