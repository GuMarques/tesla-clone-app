import { Pressable, Text, View } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState } from "react";
import { styles } from "./styles.css";

interface ventLevel {
  text: string;
  iconName: keyof typeof MaterialCommunityIcons.glyphMap;
  index: number;
}

const ventLevels: ventLevel[] = [
  { text: "Off", iconName: "fan-off", index: 0 },
  { text: "On", iconName: "fan-speed-1", index: 1 },
  { text: "On", iconName: "fan-speed-2", index: 2 },
  { text: "On", iconName: "fan-speed-3", index: 3 },
];

export default function ClimateControls() {
  const [currentTemperature, setCurrentTemperature] = useState(69);
  const [toggleClimate, setToggleClimate] = useState(false);
  const [ventLevel, setVentLevel] = useState<ventLevel>(ventLevels[0]);

  const changeVentLevel = () => {
    setVentLevel((oldState) => {
      if (oldState.index === 3) {
        return ventLevels[0];
      } else {
        return ventLevels[oldState.index + 1];
      }
    });
  };

  return (
    <View style={styles.climatecontrol}>
      <Pressable
        style={styles.button}
        onPress={() => setToggleClimate((oldState) => !oldState)}
      >
        <Ionicons
          name="power"
          size={30}
          color={toggleClimate ? "white" : "gray"}
        />
        <Text
          style={toggleClimate ? styles.buttontexton : styles.buttontextoff}
        >
          {toggleClimate ? "On" : "Off"}
        </Text>
      </Pressable>
      <MaterialIcons
        onPress={() => setCurrentTemperature((oldState) => oldState - 1)}
        name="keyboard-arrow-left"
        size={26}
        color="gray"
        style={styles.temperatureButton}
      />
      <Text style={styles.temperaturetitle}>{currentTemperature}°</Text>
      <MaterialIcons
        onPress={() => setCurrentTemperature((oldState) => oldState + 1)}
        name="keyboard-arrow-right"
        size={26}
        color="gray"
        style={styles.temperatureButton}
      />
      <Pressable onPress={changeVentLevel} style={styles.button}>
        <MaterialCommunityIcons
          name={ventLevel.iconName}
          size={30}
          color={ventLevel.index === 0 ? "gray" : "white"}
        />
        <Text
          style={
            ventLevel.index === 0 ? styles.buttontextoff : styles.buttontexton
          }
        >
          {ventLevel.text}
        </Text>
      </Pressable>
    </View>
  );
}
