import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeview: {
    flex: 1,
    backgroundColor: "#161818",
  },
  container: {
    flex: 1,
    backgroundColor: "#161818",
    position: "relative",
  },
  image: {
    width: "100%",
    height: 568,
  },
  backarrow: {
    position: "absolute",
    backgroundColor: "#222324",
    width: 40,
    height: 40,
    top: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    left: 25,
    zIndex: 10,
  },
});
