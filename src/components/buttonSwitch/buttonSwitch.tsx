import { Pressable, Touchable, TouchableOpacity, View } from "react-native"
import { general } from "../../utils/general"
import { FontWeight } from "../../utils/types"
import Text from "../text"
import { styles } from "./styles"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import React, { useCallback, useMemo } from "react"
import Animated, { spring } from "react-native-reanimated"
import { SRC_WIDTH } from "../../utils/func"
const animationFrom = {
  mass: 1,
  damping: 45,
  stiffness: 85,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
}
const animationTo = {
  toValue: 0,
  mass: 1,
  damping: 45,
  stiffness: 85,
  overshootClamping: false,
  restSpeedThreshold: 0.001,
  restDisplacementThreshold: 0.001,
}
export const ButtonSwitch = React.memo(
  ({
    switchValue,
    setSwitchValue,
  }: {
    switchValue: string
    setSwitchValue: (arg: string) => void
  }) => {
    const switchTranslate = useMemo(() => new Animated.Value(0), [])
    const translateTo = SRC_WIDTH / 2 - 22 - 7

    useMemo(() => {
      if (switchValue === "chapters") {
        spring(switchTranslate, {
          toValue: translateTo,
          ...animationFrom,
        }).start()
      } else {
        spring(switchTranslate, {
          ...animationTo,
        }).start()
      }
    }, [switchValue, switchTranslate])

    const handleSwitch = useCallback((tab: string) => {
      setSwitchValue(tab)
    }, [])
    return (
      <GestureHandlerRootView>
        <View style={styles.container}>
          <Animated.View
            style={[
              {
                backgroundColor: "white",
                borderRadius: 24,
                width: "50%",
                alignItems: "center",
                zIndex: -1,
                position: "absolute",
                top: 7,
                left: 7,
                bottom: 7,
                right: 7,
                transform: [{ translateX: switchTranslate }],
              },
            ]}
          />
          <TouchableOpacity
            onPress={() => handleSwitch("information")}
            style={styles.textContainer}
          >
            <Text
              fontSize={general.text.text - 2}
              fontWeight={FontWeight.Medium}
            >
              information
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSwitch("chapters")}
            style={styles.textContainer}
          >
            <Text
              fontSize={general.text.text - 2}
              fontWeight={FontWeight.Medium}
            >
              Chapter
            </Text>
          </TouchableOpacity>
        </View>
      </GestureHandlerRootView>
    )
  }
)
