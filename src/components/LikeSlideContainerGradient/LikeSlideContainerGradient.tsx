import { View, ViewProps } from "react-native"
import { Space } from "../space/space"
import BgGradient from "../../../assets/components/bgGradient"
import { styles } from "./styles"
import React from "react"

interface ILikeSlideContainerGradient extends ViewProps {
  numberOfItems: number
}
export const LikeSlideContainerGradient = React.memo(
  (props: ILikeSlideContainerGradient) => {
    return (
      <View style={styles.container}>
        <View style={styles.unknown}>
          <View style={styles.innerContainer} />
          <Space height={15} />
          {props.children}
        </View>
        <BgGradient height={props.numberOfItems} />
      </View>
    )
  }
)
