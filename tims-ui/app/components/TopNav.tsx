import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";
import "../../global.css";

type nameProps = { pageName: string };

const TopNav = (pageName: nameProps) => {
  const router = useRouter();
  return (
    <View className="bg-white pt-[60px] pb-2">
      <View className="flex flex-row">
        <View className="w-1/3"></View>
        <View className="w-1/3 text-center">
          <Text className="font-bold text-xl text-center">
            {pageName.pageName}
          </Text>
        </View>
        <View className="flex flex-row w-1/3 justify-end gap-10 px-5 ml-auto">
          {/* <Text className="justify-self-center font-semibold text-lg">
          {pageName.pageName}
        </Text> */}
        <Pressable className="flex items-center">
          <MaterialCommunityIcons
            name="shopping-search-outline"
            size={24}
            color="black"
          />
          </Pressable>
          <Pressable onPress={() => {}} className="flex items-center">
            <EvilIcons name="user" size={30} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default TopNav;