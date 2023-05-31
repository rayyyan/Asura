import { Dimensions, StyleSheet } from "react-native"
import { general } from "../../utils/general"

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    borderRadius: 15,
    width: Dimensions.get("window").width / 3.86170212766,
    borderColor: general.borderColor,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
