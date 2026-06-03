import { Text, View } from "react-native";
import "../global.css";
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";

export default function Index() {
  return (
    <View className="bg-amber-50 flex-1 justify-center align-middle">
      <TopNav />
      <View className="">
        <Text className="text-blue-700">
          Edit app/index.tsx to edit this screen.
        </Text>
      </View>
      <View className="bg-white mt-auto">
        <BottomNav />
      </View>
    </View>
  );
}
