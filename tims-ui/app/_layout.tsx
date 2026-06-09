import { Stack } from "expo-router";
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";

export default function RootLayout() {
  return (
    <>
      <TopNav />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
      <BottomNav />
    </>
  );
}
