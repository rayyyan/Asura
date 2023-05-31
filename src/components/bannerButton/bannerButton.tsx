import { TouchableOpacity, View } from "react-native"
import ProfileIcon from "../profileIcon"
import Text from "../text"
import { AntDesign } from "@expo/vector-icons"

import { general } from "../../utils/general"
import { FontWeight } from "../../utils/types"
import { styles } from "./styles"
import React from "react"

interface IBannerButton {
  title?: string
  subTitle?: string
}
export const BannerButton = ({
  title = "Homeless Rayan",
  subTitle = "Chapter 345",
}: IBannerButton) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ProfileIcon size={42} />
        <View
          style={{
            marginLeft: 15,
          }}
        >
          <Text fontSize={general.text.normal} fontWeight={FontWeight.Medium}>
            {title}
          </Text>
          <Text
            fontSize={general.text.text - 2}
            fontWeight={FontWeight.Regular}
          >
            {subTitle}
          </Text>
        </View>
      </View>
      <AntDesign name="right" size={12} color="black" />
    </TouchableOpacity>
  )
}
