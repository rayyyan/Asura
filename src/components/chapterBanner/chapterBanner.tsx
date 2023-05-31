import { View } from "react-native"
import Text from "../text"
import { general } from "../../utils/general"
import React from "react"

export const ChapterBanner = React.memo(({ text, isTop = false }: any) => {
  return (
    <View
      style={[
        {
          backgroundColor: "#fff",
          position: "absolute",
          padding: 8,
          paddingHorizontal: 12,
          borderRadius: 22,
        },
        isTop
          ? {
              top: 18,
              right: 18,
            }
          : { bottom: 18, left: 18 },
      ]}
    >
      <Text fontSize={general.text.text - 3}>{text}</Text>
    </View>
  )
})
