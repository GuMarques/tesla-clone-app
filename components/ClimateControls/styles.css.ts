import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  temperatureButton: {
    padding: 5,
  },
  climatecontrol: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 15,
    flex: 1,
  },
  button: {
    gap: 10,
    alignItems: "center",
  },
  buttontexton: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  buttontextoff: {
    fontSize: 16,
    color: "gray",
    fontWeight: "bold",
  },
  temperaturetitle: {
    fontSize: 40,
    color: "#fff",
    paddingLeft: 3,
    fontWeight: "400",
    width: 70,
    textAlign: "center",
  },
});
