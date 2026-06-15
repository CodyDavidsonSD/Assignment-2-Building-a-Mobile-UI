import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View } from "react-native";
import "../../global.css";

type nameProps = { pageName: string };

const TopNav = (pageName: nameProps) => {
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
          <MaterialCommunityIcons
            name="shopping-search-outline"
            size={24}
            color="black"
          />
          <EvilIcons name="user" size={30} color="black" />
        </View>
      </View>
    </View>
  );
};

export default TopNav;
