import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles.css";

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>My model S</Text>
        <Text style={styles.subtitle}>Parked</Text>
      </View>
      <FontAwesome name="user-circle" size={30} color="gray" />
    </View>
  );
}
