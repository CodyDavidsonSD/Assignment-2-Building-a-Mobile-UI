import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Component } from "react";
import { Text, View } from "react-native";
import "../../global.css";

export default class TopNav extends Component {
  render() {
    return (
      <View className="bg-white pt-[60px] pl-5">
        <View className="flex flex-row justify-end gap-10 px-5">
          <MaterialCommunityIcons
            name="shopping-search-outline"
            size={24}
            color="black"
          />
          <EvilIcons name="user" size={30} color="black" />
        </View>
        <Text className="w-1/2 text-wrap text-2xl text-black font-bold">
          Good afternoon, Cody Davidson.
        </Text>
      </View>
    );
  }
}
