import { Stack, usePathname } from "expo-router";
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";

export default function RootLayout() {
  const pathname = usePathname();
  const formattedName = pathname.charAt(1).toUpperCase() + pathname.slice(2);
  return (
    <>
      <TopNav pageName={formattedName} />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      ></Stack>
      <BottomNav />
    </>
  );
}
