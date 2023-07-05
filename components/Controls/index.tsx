import { View } from "react-native";
import {
    Entypo,
    MaterialCommunityIcons,
    FontAwesome5,
  } from "@expo/vector-icons";
import { styles } from "./styles.css";

export default function Controls() {
  return (
    <View style={styles.controls}>
      <Entypo name="lock" size={26} color="gray" />
      <MaterialCommunityIcons name="fan" size={26} color="gray" />
      <FontAwesome5 name="bolt" size={26} color="gray" />
      <MaterialCommunityIcons name="car-door" size={26} color="gray" />
    </View>
  );
}
