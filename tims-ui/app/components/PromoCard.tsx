import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

export default function PromoCard(): JSX.Element {
  return (
    <View className="bg-white rounded-lg overflow-hidden shadow-md w-full">
      <View className="flex-row p-4 items-center gap-4">
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80' }}
          className="w-24 h-24 rounded-lg"
          resizeMode="cover"
        />
        <View className="flex-1">
          <Text className="text-xl text-black font-bold">20% OFF</Text>
          <Text className="text-xs text-gray-500 mt-1">Bagel or Croissant with an Iced Coffee</Text>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.85} className="bg-teal-700 px-4 py-3 flex-row items-center justify-between rounded-b-lg">
        <View className="flex-row items-center gap-2">
          <MaterialIcons name="local-offer" size={20} color="#fff" />
          <Text className="text-white font-semibold">7 new offers!</Text>
        </View>
        <Entypo name="chevron-small-right" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
