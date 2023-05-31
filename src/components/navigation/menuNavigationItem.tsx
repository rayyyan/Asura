import { StyleSheet, TouchableOpacity, View } from "react-native"
import Text from "../text"
import { AntDesign } from "@expo/vector-icons"
import { COLORS } from "../../utils/colors"
import { general } from "../../utils/general"
import { FontWeight } from "../../utils/types"
import React from "react"

export const MenuNavigatorItem = ({
  isActive = false,
  name,
  onPress,
}: {
  isActive?: boolean
  name: string
  onPress: () => void
}) => {
  return (
    <TouchableOpacity
      style={[isActive ? { backgroundColor: "#334148" } : {}, styles.container]}
      onPress={onPress}
    >
      <View style={styles.innerContainer}>
        <AntDesign
          name="gift"
          size={20}
          color={isActive ? "white" : COLORS.defaultLightText}
        />
      </View>
      <Text
        fontSize={general.text.text}
        fontWeight={FontWeight.Medium}
        style={{
          color: isActive ? "white" : COLORS.defaultLightText,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 26,
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 15,
  },
  innerContainer: {
    marginRight: 20,
  },
})
