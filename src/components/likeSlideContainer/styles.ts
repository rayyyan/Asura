import { StyleSheet } from "react-native"
import { general } from "../../utils/general"

export const styles = StyleSheet.create({
  container: {
    borderColor: general.borderColor,
    borderRadius: 40,
    borderWidth: 1,
    minHeight: 354,
    padding: 22,
    paddingTop: 15,
  },
  innerContainer: {
    height: 5,
    width: 22,
    backgroundColor: "#CBCBCB",
    borderRadius: 5,
    alignSelf: "center",
  },
})
