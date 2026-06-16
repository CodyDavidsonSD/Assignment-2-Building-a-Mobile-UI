import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router, usePathname } from "expo-router";
import { Pressable, Text, View } from "react-native";
import "../../global.css";

const BottomNav = () => {
  const pathname = usePathname();
  return (
    <View className="flex flex-row justify-center gap-x-32 py-2 mx-auto mb-safe w-full">
      <Pressable onPress={() => router.push("/")} className="flex items-center">
        <AntDesign
          name="home"
          size={24}
          color={`${pathname === "/" ? "#c80f2e" : "black"}`}
        />
        <Text
          className={`text-center ${pathname === "/" ? "text-[#c80f2e]" : ""}`}
        >
          Home
        </Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/scan")}
        className="flex items-center"
      >
        <MaterialIcons
          name="qr-code"
          size={24}
          color={`${pathname === "/scan" ? "#c80f2e" : "black"}`}
        />
        <Text
          className={`text-center ${pathname === "/scan" ? "text-[#c80f2e]" : ""}`}
        >
          Scan
        </Text>
      </Pressable>
      <Pressable
        onPress={() => router.push("/discover")}
        className="flex items-center"
      >
        <Ionicons
          name="sparkles-outline"
          size={24}
          color={`${pathname === "/discover" ? "#c80f2e" : "black"}`}
        />
        <Text
          className={`text-center ${pathname === "/discover" ? "text-[#c80f2e]" : ""}`}
        >
          Discover
        </Text>
      </Pressable>
    </View>
  );
};

export default BottomNav;
