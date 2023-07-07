import { Pressable, Text } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles.css";
import { Link } from "expo-router";

interface Props {
  name: string;
  iconName: keyof typeof Ionicons.glyphMap;
  href: string;
}

export default function MenuItem({ name, iconName, href }: Props) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.optionRow}>
        <Ionicons name={iconName} size={26} color="gray" />
        <Text style={styles.optionText}>{name}</Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="gray"
          style={styles.arrow}
        />
      </Pressable>
    </Link>
  );
}
