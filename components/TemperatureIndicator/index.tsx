import { Text, View } from "react-native";
import { styles } from "./styles.css";

export default function TemperatureIndicator() {
  return (
    <View style={styles.temperature}>
      <Text style={styles.temperaturelabel}>Interior 74°F</Text>
      <Text style={styles.temperaturelabel}>•</Text>
      <Text style={styles.temperaturelabel}>Exterior 66°F</Text>
    </View>
  );
}
