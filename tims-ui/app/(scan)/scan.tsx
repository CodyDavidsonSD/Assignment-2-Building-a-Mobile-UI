import {Text, View, Image} from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import ToggleSwitch from "../components/ToggleSwitch";

const scan = () => {
  return (
    <View className="flex-1 bg-amber-50">
      <View className="flex-row flex-wrap bg-white pt-2">
        <View className="w-1/2">
          <Text className="py-4 text-lg font-semibold text-center text-[#c80f2e]">Scan</Text>
        </View>
        <View className="w-1/2">
          <Text className="py-4 text-lg font-semibold text-center">Tims Gift Card</Text>
        </View>
        <View className="flex-row h-2">
          <View className="w-1/2 bg-[#c80f2e]"></View>
          <View className="w-1/2"></View>
        </View>
      </View>
      <View className="flex-column bg-white p-5 mx-5 my-4 rounded-2xl shadow-md">
        <View className="flex-row items-center gap-3">
          <View className="bg-[#c80f2e] px-4 h-10 rounded-lg justify-center">
            <FontAwesome6 name="canadian-maple-leaf" size={24} color="white"/>
          </View>
          <View className="flex-column gap-3">
            <Text className="font-semibold text-lg">Tims Rewards</Text>
            <Text className="text-slate-700">G044-498Y-N2LK</Text>
          </View>
          <View className="ml-auto">
            <Text className="text-xl font-bold">325 Points</Text>
          </View>
        </View>
      </View>
      <View className="flex-column bg-white px-4 pt-6 pb-5 mx-5 my-4 rounded-2xl shadow-md gap-9">
        <Text className="text-2xl font-bold text-center">Scan For Tims Rewards</Text>
        <Image 
          source={require('../../assets/images/qr_code.png')} 
          className="w-72 h-72 self-center"
        />
      </View>
      <View className="flex-column bg-white px-4 pt-1 pb-2 mx-5 my-4 rounded-2xl shadow-md">
        <View className="flex-row items-center">
            <Text className="font-semibold text-lg">Redeem my points</Text>
            <View className="ml-auto">
              <ToggleSwitch/>
            </View>
        </View>
        <View className="bg-gray-200 h-0.5">
        </View>
        <View className="my-4">
          <Text className="text-lg font-bold">Chosen Reward Level</Text>
          <View className="flex-row">
            <Text className="text-lg flex-1">
              Quenchers, Cold Brew, Iced Capp, Frozen or Espresso Beverages
            </Text>
            <View className="self-center">
              <Entypo name="chevron-small-right" size={40} color="black"/>
            </View>
          </View>
          <Text className="text-[#c80f2e] text-lg font-semibold">800 Points</Text>
        </View>
      </View>
    </View>
  );
};

export default scan;
