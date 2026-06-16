import { Text, View } from "react-native";
import { getAllDeals } from "../../data/Deal";
import ChallengeCard from "../components/ChallengeCard";
import DealCard from "../components/DealCard";

const discover = async () => {
  const deals = await getAllDeals();
  return (
    <View className="bg-amber-50 h-full">
      <View className="px-5 py-4 mt-4 flex flex-row justify-between items-end">
        <Text className="text-2xl font-bold">Offers</Text>
        <Text className="text-xl font-bold text-[#c80f2e]">
          View All (7) &gt;{" "}
        </Text>
      </View>
      <ChallengeCard />
      <View className="flex flex-row gap-2 m-4">
        {deals.map((deal) => (
          <DealCard
            img={deal.img}
            msg={deal.msg}
            deal={deal.deal}
            description={deal.description}
            timeLeft={deal.timeLeft}
          />
        ))}
      </View>
    </View>
  );
};

export default discover;
