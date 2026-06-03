import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { View } from "react-native";
import "../../global.css";

const BottomNav = () => {
  return (
    <View className="flex flex-row justify-center gap-x-40 py-2 mb-safe w-full">
      <AntDesign name="home" size={24} color="black" />
      <MaterialIcons name="qr-code" size={24} color="black" />
      <Ionicons name="sparkles-outline" size={24} color="black" />
    </View>
  );
};

export default BottomNav;
