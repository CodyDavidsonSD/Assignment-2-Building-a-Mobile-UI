import { dirButtons } from "@/data/DirectoryButtons";
import { Image, Text, View, Pressable, Alert } from "react-native";
import "../global.css";
import BottomNav from "./components/BottomNav";
import DirButtonsSection from "./components/DirButtonsSection";
import PromoCard from "./components/PromoCard";
import TopNav from "./components/TopNav";

export default function Index() {
  return (
    <View className="bg-amber-50 flex-1 justify-center align-middle">
      <TopNav />
      <View className="px-5 py-4">
        <PromoCard />
      </View>
      <View className="px-5">
        <View className="flex-row gap-4">
          <View className="flex-1 bg-white rounded-lg p-4 items-center shadow">
            <Text className="text-base text-gray-800 font-semibold">Order</Text>
            <Image
              source={require("../assets/images/Screenshot 2026-06-05 203806.png")}
              className="w-full h-24 mt-3 rounded"
              resizeMode="contain"
            />
            <Text className="text-xs text-gray-500 mt-3">Start an Order for your Tims favourites.</Text>
          </View>
          <View className="flex-1 bg-white rounded-lg p-4 items-center shadow">
            <Text className="text-base text-gray-800 font-semibold">Rewards</Text>
            <Image
              source={require("../assets/images/Screenshot 2026-06-05 205158.png")}
              className="w-full h-24 mt-3 rounded"
              resizeMode="contain"
            />
            <Text className="text-xs text-gray-500 mt-3">You've got 1 reward to claim!</Text>
          </View>
        </View>
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
      <Pressable 
        onPress={() => Alert.alert('Alert','Alert!')}
        className="items-center rounded-lg bg-red-600">
        <Text className="text-white w-40 text-center">
          ALERT
        </Text>
      </Pressable>
      <View className="bg-white mt-auto">
        <BottomNav />
      </View>
    </View>
  );
}
