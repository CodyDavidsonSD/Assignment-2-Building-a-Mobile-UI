import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, ImageSourcePropType, Text, View } from "react-native";

type DealCardProps = {
  img: ImageSourcePropType;
  msg?: string;
  deal: string;
  description: string;
  timeLeft: string;
};

const DealCard = (card: DealCardProps) => {
  return (
    <View className="rounded-2xl bg-white h-96">
      <Image source={card.img} className="w-[188px] h-44" />
      <View className="flex flex-col justify-between pb-2 h-52">
        <View>
          <View
            className={`${card.msg ? "bg-green-300 w-full p-2" : "hidden"}`}
          >
            <Text className="text-sm font-semibold text-center">
              {card.msg}
            </Text>
          </View>
          <Text className="text-lg font-semibold">{card.deal}</Text>
          <Text className="pt-1">{card.description}</Text>
        </View>
        <View className="mt-auto">
          <Text className="text-sm text-[#c80f2e] pb-4">{card.timeLeft}</Text>
          <View className="flex flex-row justify-start gap-1 mb-2">
            <Text className="text-sm underline text-slate-800 self-end">
              Offer Details
            </Text>
            <Ionicons name="document-text-outline" size={16} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default DealCard;
