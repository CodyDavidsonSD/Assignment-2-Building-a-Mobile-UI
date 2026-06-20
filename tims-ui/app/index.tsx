import { dirButtons } from "@/data/DirectoryButtons";
import { Image, Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import "../global.css";
import DirButtonsSection from "./components/DirButtonsSection";
import PromoCard from "./components/PromoCard";

export default function Index() {
  const router = useRouter();
  return (
    <View className="bg-amber-50 flex-1 justify-center align-middle mt-6">
      <View className="bg-white mt-5 py-2">
        <Text className="w-1/2 text-wrap text-2xl text-black font-bold px-4">
          Good afternoon, Cody Davidson.
        </Text>
      </View>
      <View className="px-5 py-4">
        <PromoCard />
      </View>
      <View className="px-5">
        <View className="flex-row gap-4">
          <Pressable onPress={() => router.push('/(location)/location')} className="flex-1 bg-white rounded-lg p-4 items-center shadow">
            <Text className="text-base text-gray-800 font-semibold">Order</Text>
            <Image
              source={require("../assets/images/Screenshot 2026-06-05 203806.png")}
              className="w-full h-24 mt-3 rounded"
              resizeMode="contain"
            />
            <Text className="text-xs text-gray-500 mt-3">
              Start an Order for your Tims favourites.
            </Text>
          </Pressable>
          <View className="flex-1 bg-white rounded-lg p-4 items-center shadow">
            <Text className="text-base text-gray-800 font-semibold">
              Rewards
            </Text>
            <Image
              source={require("../assets/images/Screenshot 2026-06-05 205158.png")}
              className="w-full h-24 mt-3 rounded"
              resizeMode="contain"
            />
            <Text className="text-xs text-gray-500 mt-3">
              You've got 1 reward to claim!
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-row flex-wrap gap-3 px-4 py-5 grid-cols-4 pl-3 pr-2">
        {dirButtons.map((DirButton) => (
          <DirButtonsSection
            key={DirButton.label}
            icon={DirButton.icon}
            label={DirButton.label}
          />
        ))}
      </View>
      {/* <Pressable
        onPress={() => Alert.alert("Alert", "Alert!")}
        className="items-center rounded-lg bg-red-600"
      >
        <Text className="text-white w-40 text-center">ALERT</Text>
      </Pressable> */}
    </View>
  );
}
