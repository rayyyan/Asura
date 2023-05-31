import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    borderRadius: 40,
    position: "absolute",
    top: 15,
    transform: [{ rotate: "180deg" }],
    elevation: 15,
  },
  center: { justifyContent: "center", alignItems: "center" },
  notification: {
    position: "absolute",
    width: 16,
    height: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "white",
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#23C993",
  },
})
