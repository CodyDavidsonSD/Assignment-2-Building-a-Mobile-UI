import { Text, View } from "react-native";
import "../global.css";
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";
import DirButtonsSection from "./components/DirButtonsSection";
import { DirButton, dirButtons } from "@/data/DirectoryButtons";

export default function Index() {
  return (
    <View className="bg-amber-50 flex-1 justify-center align-middle">
      <TopNav/>
      <View className="">
        <Text className="text-blue-700">
          Edit app/index.tsx to edit this screen.
        </Text>
      </View>
      <View className="flex-row flex-wrap gap-4 px-5 py-5">
        {
          dirButtons.map((DirButton) => (
            <DirButtonsSection
              key= {DirButton.label}
              icon={DirButton.icon}
              label={DirButton.label}
            />
        ))}
      </View>
      <View className="bg-white mt-auto">
        <BottomNav />
      </View>
    </View>
  );
}
