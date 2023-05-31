import {
  Animated,
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native"
import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated"
import { MANGAS } from "../../utils/data"
import { ChapterBanner } from "../chapterBanner/chapterBanner"
import React, { useMemo } from "react"
const SRC_WIDTH = Dimensions.get("window").width
const CARD_LENGTH = SRC_WIDTH * 0.75
const SPACING = SRC_WIDTH * 0.025
const SIDE_CARD_LENGTH = (SRC_WIDTH * 0.225) / 2

interface IItem {
  index: number
  scrollX: number
}

export const Item = React.memo(({ index, scrollX }: IItem) => {
  const size = useSharedValue(0.8)

  const inputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ]

  size.value = useMemo(
    () => interpolate(scrollX, inputRange, [0.8, 1, 0.8], Extrapolate.CLAMP),
    []
  )

  const opacity = useSharedValue(1)
  const opacityInputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ]
  opacity.value = useMemo(
    () =>
      interpolate(scrollX, opacityInputRange, [0.5, 1, 0.5], Extrapolate.CLAMP),
    []
  )

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scaleY: size.value }],
      opacity: opacity.value,
    }
  })

  return (
    <Animated.View
      style={[
        styles.card,
        cardStyle,
        {
          marginLeft: index == 0 ? SIDE_CARD_LENGTH : SPACING,
          marginRight: index == 2 ? SIDE_CARD_LENGTH : SPACING,
        },
      ]}
    >
      <Animated.View style={[styles.cardShadow, cardStyle]} />
      <Animated.View style={[styles.cardShadow, cardStyle]} />
      <View
        style={{
          width: "100%",
          height: 172,
          borderRadius: 18.5,
          overflow: "hidden",
        }}
      >
        <ImageBackground
          source={{
            uri: MANGAS[0].src,
          }}
          style={{ zIndex: 1, width: "100%", height: "100%" }}
        >
          <ChapterBanner text={"Manhua"} />
        </ImageBackground>
      </View>
    </Animated.View>
  )
})
const styles = StyleSheet.create({
  card: {
    width: CARD_LENGTH,

    // overflow: "hidden",
  },
  cardShadow: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    zIndex: -1,
    width: "80%",
    height: 172,
    borderRadius: 32.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,

    elevation: 12,
  },
})
