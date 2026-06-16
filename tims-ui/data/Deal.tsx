import { ImageSourcePropType } from "react-native";

export type Deal = {
  img: ImageSourcePropType;
  deal: string;
  description: string;
  timeLeft: string;
  msg?: string;
};

export const deals: Deal[] = [
  {
    img: require("../assets/images/Screenshot 2026-06-15 164723.png"),
    deal: "$5 Deal",
    description: "Grilled Cheese Melt",
    timeLeft: "5 days left",
    msg: "Melts are back!",
  },
  {
    img: require("../assets/images/Screenshot 2026-06-15 164733.png"),
    deal: "30% OFF",
    description: "Quenchers",
    timeLeft: "5 days left",
  },
];

export async function getAllDeals(): Promise<Deal[]> {
  return deals;
}
