import { useState } from 'react'
import { Pressable } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ToggleSwitch = () => {
    const [active, setActive] = useState(false);
  return (
    <Pressable onPress={() => setActive(!active)}>
    {
        active ? (
            <MaterialCommunityIcons name="toggle-switch" size={54} color="#c80f2e" />
        ) 
        : 
        (
            <MaterialCommunityIcons name="toggle-switch-off-outline" size={54} color="#c80f2e" />
    )}
    </Pressable>
  )
}

export default ToggleSwitch
