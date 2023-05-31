import { StyleSheet, TouchableOpacity, View } from "react-native"
import { COLORS } from "../../utils/colors"
import { general } from "../../utils/general"
import { FontWeight } from "../../utils/types"
import Text from "../text"
import { AntDesign, Ionicons } from "@expo/vector-icons"
import { CommonActions, useNavigation } from "@react-navigation/native"
import { TypeNavigationScreen } from "../../types/navigationTypes"
import { goBackOnce } from "../../utils/func"
import React from "react"

const NavigationHeader = ({ title, icon, onPress }: any) => {
  const navigation = useNavigation<TypeNavigationScreen>()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBackOnce(navigation)}>
        <Ionicons
          name="arrow-back-sharp"
          size={28}
          color={COLORS.defaultLightText}
        />
      </TouchableOpacity>
      <Text
        fontSize={general.text.normal}
        fontWeight={FontWeight.Medium}
        style={styles.text}
      >
        {title}
      </Text>
      <AntDesign name={icon} size={22} color={COLORS.defaultLightText} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 15,
  },
  text: {
    letterSpacing: 0.2,
  },
})

export default NavigationHeader
