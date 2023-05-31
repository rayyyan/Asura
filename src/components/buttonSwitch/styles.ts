import { StyleSheet } from "react-native"
import { COLORS } from "../../utils/colors"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.lightGray,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 24,
  },
  textContainer: {
    padding: 10,
    width: "50%",
    borderRadius: 24,
    alignItems: "center",
  },
})
