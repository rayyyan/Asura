import { View, Dimensions } from "react-native"
import { general } from "../../utils/general"
import { FontWeight } from "../../utils/types"
import Text from "../text"
import { styles } from "./styles"
import React from "react"

interface IMangaInfo {
  label: string
  info: string
}
export const MangaInfo = ({ label, info }: IMangaInfo) => {
  return (
    <View style={styles.container}>
      <Text fontSize={general.text.text - 1} fontWeight={FontWeight.Medium}>
        {label}
      </Text>
      <Text fontSize={general.text.text - 3} fontWeight={FontWeight.Regular}>
        {info}
      </Text>
    </View>
  )
}
