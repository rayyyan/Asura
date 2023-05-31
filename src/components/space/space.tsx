import React from "react"
import { View } from "react-native"

interface ISpace {
  height: number
}

export const Space = React.memo((props: ISpace) => {
  return (
    <View
      style={{
        height: props.height,
      }}
    />
  )
})
