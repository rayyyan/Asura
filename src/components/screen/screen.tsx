import Constants from "expo-constants"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
export const OutScreen = React.memo((props: any) => {
  return (
    <View
      style={[
        styles.outContainer,
        {
          backgroundColor: "white",
        },
      ]}
    >
      <StatusBar style="auto" />
      {props?.children}
    </View>
  )
})
export const InScreen = React.memo((props: any) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: "white",
        },
      ]}
    >
      <StatusBar style="auto" />
      {props?.children}
    </View>
  )
})

const Screen = React.memo((props: any) => {
  return (
    <View
      style={[
        styles.pageContainer,
        styles.container,
        {
          backgroundColor: "white",
        },
      ]}
    >
      {props?.children}
    </View>
  )
})
const styles = StyleSheet.create({
  pageContainer: {
    // paddingTop: Constants.statusBarHeight + 15,
  },
  container: {
    paddingHorizontal: 22,
    flex: 1,
  },
  outContainer: {
    marginHorizontal: -22,
  },
})
export default Screen
