import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, View } from "react-native";

const ChallengeCard = () => {
  return (
    <View className="bg-white rounded-xl mx-4 p-4 shadow-sm">
      <Text className="text-2xl font-bold mb-2">Beverage Challenge</Text>
      <Text className="text-wrap text-lg pr-6 mb-4">
        Earn 400 bonus points when you order a beverage on 2 separate visits!
      </Text>
      <Text className="text-[#c80f2e] mb-2">5 days left</Text>
      <View className="flex flex-row gap-5 py-2">
        <MaterialIcons name="local-drink" size={24} color="black" />
        <Text className="font-semibold">Beverage</Text>
      </View>
      <View className="flex flex-row gap-5 mb-4">
        <MaterialIcons name="local-drink" size={24} color="black" />
        <Text className="font-semibold">Beverage</Text>
      </View>
      <View className="flex flex-row justify-start gap-1 mb-2">
        <Text className="text-sm underline text-slate-800 self-end">
          Offer Details
        </Text>
        <Ionicons name="document-text-outline" size={16} color="black" />
      </View>
      <View className="bg-[#c80f2e] m-2 w-auto py-2 rounded-xl">
        <Text className="text-lg text-white text-center font-semibold">
          Activate
        </Text>
      </View>
    </View>
  );
};

export default ChallengeCard;
