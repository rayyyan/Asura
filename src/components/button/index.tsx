import { StyleSheet, Text, TextProps, View } from "react-native"
import React, { useMemo } from "react"
import { ButtonProps } from "react-native"
import { TextStyle } from "react-native"
import { ViewStyle } from "react-native"
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native"
import { Pressable } from "react-native"
import { TouchableOpacityProps } from "react-native"
import { returnPadding } from "../../utils/func"

const ButtonType = {
  TouchableOpacity: TouchableOpacity,
  Pressable: Pressable,
}
interface Button extends TouchableOpacityProps {
  FeedBackType: "TouchableOpacity" | "Pressable"
  title?: string
  buttonAlign?: ViewStyle["alignSelf"]
  buttonStyle?: TouchableOpacityProps["style"]
  backgroundColor?: string
  borderRadius?: number
  textColor?: string
  textStyle?: TextStyle
  width?: number | string
  texColor?: string
  padding?:
    | `${number} ${number} ${number} ${number}`
    | `${number} ${number}`
    | `${number}`
}
// Utils

const Button = (props: Button) => {
  const {
    FeedBackType,
    buttonAlign,
    backgroundColor,
    title,
    width,
    texColor,
    borderRadius = 8,
    padding: allPadding,
    buttonStyle,
    children,
    ...BtnProps
  } = props
  const Btn = ButtonType[FeedBackType]
  const padding = useMemo(
    () => (allPadding ? returnPadding(allPadding?.trim()) : {}),
    []
  )
  return (
    <Btn
      {...BtnProps}
      style={[
        {
          alignSelf: buttonAlign,
          backgroundColor,
          width,
          borderRadius,
          ...padding,
        },
        buttonStyle,
      ]}
    >
      {children && children}
      {title && (
        <Text
          style={[
            {
              color: texColor || "black",
              textAlign: "center",
            },
            props?.textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </Btn>
  )
}
export default Button

const styles = StyleSheet.create({})
