import { SafeAreaView, View, Image, FlatList } from "react-native";
import { styles } from "./styles.css";
import { StatusBar } from "expo-status-bar";
import car from "../../assets/images/car.png";
import menuOptions from "../../assets/menuOptions";
import { Header, Controls, MenuItem } from "../../components";

export default function Home() {
  return (
    <SafeAreaView style={styles.safeview}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Header />
        <Image source={car} style={styles.image} resizeMode="contain" />
        <Controls />
        <FlatList
          data={menuOptions}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <MenuItem
              href={item.href}
              iconName={item.iconName}
              name={item.name}
              key={index}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
