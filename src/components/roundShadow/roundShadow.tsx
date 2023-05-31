import { View } from "react-native"
import { styles } from "./styles"
import React from "react"
interface IRoundShadow {
  color: string
  size: number
}
export const RoundShadow = React.memo(({ color, size }: IRoundShadow) => {
  return (
    <View
      style={[
        styles.roundShadow,
        {
          shadowColor: color,
          width: size + size / 2,
          height: size,
        },
      ]}
    />
  )
})
