import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  roundShadow: {
    shadowOffset: {
      width: 0,
      height: 3,
    },
    // opacity: 0.6,
    shadowOpacity: 0.13,
    shadowRadius: 9.51,
    elevation: 15,
    borderRadius: 40,
    position: "absolute",
    bottom: 0,
    transform: [{ rotate: "180deg" }],
  },
})
