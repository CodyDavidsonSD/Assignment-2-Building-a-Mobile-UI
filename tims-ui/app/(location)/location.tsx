import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useRouter } from "expo-router";
import "../../global.css";

const Location = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("pickup");
  const [activeFilter, setActiveFilter] = useState("recent");

  const locations = [
    {
      id: "1",
      name: "Senator Burns Bldg, Calgary",
      address: "1301 16TH AVE NW",
      distance: "10 km",
      hours: "Open until 8:00 PM",
    },
  ];

  return (
    <View className="bg-white flex-1">
      <View className="bg-white pt-4 px-5 pb-4 border-b border-gray-200">
        <View className="flex flex-row items-center justify-between mb-4">
          <Text className="text-2xl font-bold">Locations</Text>
          <View className="flex flex-row gap-4">
            <Pressable>
              <MaterialCommunityIcons
                name="map-outline"
                size={28}
                color="black"
              />
            </Pressable>
            <Pressable onPress={() => router.back()}>
              <EvilIcons name="close" size={32} color="black" />
            </Pressable>
          </View>
        </View>

        <View className="flex flex-row gap-3">
          <Pressable
            onPress={() => setActiveTab("pickup")}
            className={`px-6 py-2 rounded-full ${
              activeTab === "pickup" ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <Text
              className={`font-semibold ${
                activeTab === "pickup" ? "text-white" : "text-gray-800"
              }`}
            >
              Pickup
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setActiveTab("delivery")}
            className={`px-6 py-2 rounded-full ${
              activeTab === "delivery" ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <Text
              className={`font-semibold ${
                activeTab === "delivery" ? "text-white" : "text-gray-800"
              }`}
            >
              Delivery
            </Text>
          </Pressable>
        </View>

        <View className="mt-4 flex flex-row items-center bg-gray-100 rounded-full px-4 py-3 border border-gray-300">
          <MaterialCommunityIcons
            name="magnify"
            size={20}
            color="gray"
            style={{ marginRight: 8 }}
          />
          <TextInput
            placeholder="Enter an address"
            className="flex-1 text-base text-gray-800"
            placeholderTextColor="gray"
          />
        </View>
      </View>

      <View className="px-5 pt-4 pb-2 flex flex-row justify-between border-b border-gray-200">
        <Pressable onPress={() => setActiveFilter("recent")}>
          <Text
            className={`text-lg font-semibold pb-3 ${
              activeFilter === "recent"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-800"
            }`}
          >
            Recent
          </Text>
        </Pressable>
        <Pressable onPress={() => setActiveFilter("nearby")}>
          <Text
            className={`text-lg font-semibold pb-3 ${
              activeFilter === "nearby"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-800"
            }`}
          >
            Nearby
          </Text>
        </Pressable>
        <Pressable onPress={() => setActiveFilter("favourites")}>
          <Text
            className={`text-lg font-semibold pb-3 ${
              activeFilter === "favourites"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-800"
            }`}
          >
            Favourites
          </Text>
        </Pressable>
      </View>

      <ScrollView className="flex-1 px-5 py-4">
        {locations.map((location) => (
          <View
            key={location.id}
            className="border-b border-gray-200 pb-4 mb-4"
          >
            <View className="flex flex-row justify-between items-start">
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-900">
                  {location.name}
                </Text>
                <Text className="text-base text-gray-900">{location.address}</Text>
                <Text className="text-sm text-gray-600">
                  {location.distance} • {location.hours}
                </Text>
              </View>
              <View className="flex flex-row gap-3 ml-4">
                <Pressable>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={24}
                    color="gray"
                  />
                </Pressable>
                <Pressable>
                  <MaterialCommunityIcons
                    name="information-outline"
                    size={24}
                    color="gray"
                  />
                </Pressable>
                <Pressable>
                  <MaterialCommunityIcons
                    name="chevron-right"
                    size={24}
                    color="gray"
                  />
                </Pressable>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Location;
