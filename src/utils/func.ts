import { CommonActions, useNavigation } from "@react-navigation/native"
import { TypeNavigationScreen } from "../types/navigationTypes"
import { Dimensions } from "react-native"
export const SRC_WIDTH = Dimensions.get("window").width
export const CARD_LENGTH = SRC_WIDTH * 0.75
export const SPACING = SRC_WIDTH * 0.025
export const returnPadding = (allPadding: string) => {
  if (allPadding.split(" ").length - 1 === 3)
    return {
      paddingTop: +allPadding?.split(" ")[0],
      paddingRight: +allPadding?.split(" ")[1],
      paddingBottom: +allPadding?.split(" ")[2],
      paddingLeft: +allPadding?.split(" ")[3],
    }
  if (allPadding.split(" ").length - 1 == 1)
    return {
      paddingVertical: +allPadding?.split(" ")[0],
      paddingHorizontal: +allPadding?.split(" ")[1],
    }
  if (!allPadding.includes(" "))
    return {
      padding: +allPadding,
    }
}

export const goBackOnce = (navigation: TypeNavigationScreen) => {
  navigation.dispatch((state) => ({
    ...CommonActions.goBack(),
    target: state.key,
  }))
}
