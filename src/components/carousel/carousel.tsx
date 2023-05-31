import React, { useState } from "react"
import { Animated, Dimensions, FlatList } from "react-native"
import { Item } from "./carouselItem"
import { CARD_LENGTH, SPACING } from "../../utils/func"
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
]
export const Carousel = React.memo(() => {
  const [scrollX, setScrollX] = useState(0)

  return (
    <Animated.View>
      <AnimatedFlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + SPACING * 1.5}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={"start"}
        data={DATA}
        horizontal={true}
        renderItem={({ item, index }) => {
          return <Item index={index} scrollX={scrollX} />
        }}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
        keyExtractor={(item) => (item as { id: string; title: string }).id}
        onScroll={(event) => {
          setScrollX(event.nativeEvent.contentOffset.x)
        }}
      />
    </Animated.View>
  )
})
