import { SafeAreaView, View, Image, Pressable } from "react-native";
import { styles } from "./styles.css";
import climate from "../../assets/images/climate.png";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { TemperatureIndicator, ClimateControls } from "../../components";

export default function ClimateScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeview}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Pressable style={styles.backarrow} onPress={() => router.back()}>
          <MaterialIcons name="keyboard-arrow-left" size={35} color="white" />
        </Pressable>
        <Image source={climate} resizeMode="contain" style={styles.image} />
        <TemperatureIndicator />
        <ClimateControls />
      </View>
    </SafeAreaView>
  );
}
