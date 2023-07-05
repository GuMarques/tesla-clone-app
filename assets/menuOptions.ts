import { Ionicons } from "@expo/vector-icons";

interface Option {
  name: string;
  iconName: keyof typeof Ionicons.glyphMap;
  href: string;
}

const menuOptions: Option[] = [
  {
    name: "Controls",
    iconName: "car-sport-sharp",
    href: "/controls",
  },
  {
    name: "Climate",
    iconName: "snow",
    href: "/climate",
  },
  {
    name: "Location",
    iconName: "location-sharp",
    href: "/location",
  },
  {
    name: "Summon",
    iconName: "navigate-circle-sharp",
    href: "/summon",
  },
  {
    name: "Security",
    iconName: "md-shield-checkmark",
    href: "/security",
  },
  {
    name: "Updates",
    iconName: "refresh-circle-sharp",
    href: "/updates",
  },
  {
    name: "Pet mode",
    iconName: "paw-sharp",
    href: "/pet-mode",
  },
]

export default menuOptions
