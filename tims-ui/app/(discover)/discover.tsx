import { Text, View } from "react-native";

const discover = () => {
  return (
    <View className="bg-amber-50 h-full">
      <View className="px-4 py-4 mt-4 flex flex-row justify-between items-end">
        <Text className="text-2xl font-bold">Offers</Text>
        <Text className="text-xl font-bold text-[#c80f2e]">View All (7)</Text>
      </View>
    </View>
  );
};

export default discover;
