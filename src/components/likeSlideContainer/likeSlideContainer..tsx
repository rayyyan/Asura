import { View } from "react-native"
import { Space } from "../space/space"
import { styles } from "./styles"
import React from "react"

export const LikeSlideContainer = React.memo((props: any) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.innerContainer} />
        <Space height={8} />
        {props.children}
      </View>
    </View>
  )
})
