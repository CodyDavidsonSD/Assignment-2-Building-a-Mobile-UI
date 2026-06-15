import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Alert, Pressable, View } from "react-native";
import "../../global.css";
import { router } from "expo-router";

const BottomNav = () => {
  return (
    <View className="flex flex-row justify-center gap-x-40 py-2 mb-safe w-full">
      <Pressable onPress={() => router.push('/')}>
        <AntDesign name="home" size={24} color="black hover:gray" />
      </Pressable>
      <Pressable onPress={() => router.push('/scan')}>
        <MaterialIcons name="qr-code" size={24} color="black" />
      </Pressable>
      <Pressable onPress={() => router.push('/discover')}>
        <Ionicons name="sparkles-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default BottomNav;
