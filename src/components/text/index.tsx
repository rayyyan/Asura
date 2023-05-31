import { Text as RnText, TextProps } from "react-native"
import { FontWeight, ObjectValues } from "../../utils/types"
import React from "react"

type fontWeight = ObjectValues<typeof FontWeight>

interface IText extends TextProps {
  fontSize?: number
  fontWeight?: fontWeight
  color?: string
}
const Text = React.memo((props: IText) => {
  const {
    fontSize = 14,
    fontWeight = "400",
    color = "#6F6F6F",
    style,
    ...rest
  } = props
  return (
    <RnText
      style={[
        {
          fontSize,
          fontWeight,
          color,
        },
        style,
      ]}
      {...rest}
    >
      {props?.children}
    </RnText>
  )
})

export default Text
