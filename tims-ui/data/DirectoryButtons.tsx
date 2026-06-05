import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ReactNode } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';


export interface DirButton {
    icon: ReactNode
    label: string
}

export const dirButtons: DirButton[] = [
    {
        icon: <FontAwesome name="tag" size={44} color="#EFCF00" />,
        label: "Offers",
    },
    {
        icon: <MaterialIcons name="moped" size={44} color="#E36044" />,
        label: "Delivery",
    },
    {
        icon: <Ionicons name="bag" size={36} color="tan" />,
        label: "TimShop",
    },
    {
        icon: <Fontisto name="heart" size={32} color="red" />,
        label: "Community",
    },
    {
        icon: <MaterialCommunityIcons name="feature-search-outline" size={40} color="black" />,
        label: "Tims Word Challenge",
    },
    {
        icon: <MaterialIcons name="sports-hockey" size={44} color="tan" />,
        label: "Tims NHL® Challenge",
    },
    {
        icon: <FontAwesome6 name="gift" size={32} color="red" />,
        label: "Give",
    },
    {
        icon: <Entypo name="location-pin" size={46} color="#E36044" />,
        label: "Restaurant Locator",
    },
    {
        icon: <FontAwesome6 name="handshake" size={32} color="tan" />,
        label: "Join Our Team",
    }
]
