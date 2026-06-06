import { DirButton} from "../../data/DirectoryButtons";
import { View, Text } from "react-native";

import React from 'react'

const DirButtonsSection = ({icon, label}:DirButton) => {
  return (
    <View className="items-center">
        <View className="bg-white shadow rounded-xl w-16 h-16 items-center justify-center mb-2">
        {icon}
        </View>
        <Text className="font-semibold text-gray-800 text-s w-24 text-center">{label}</Text>
  </View>
  )
}

export default DirButtonsSection