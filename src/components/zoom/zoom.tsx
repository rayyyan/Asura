import React, { useCallback, useContext, useMemo } from "react"
import {
  Dimensions,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  View,
  ViewProps,
} from "react-native"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
  cancelAnimation,
  runOnJS,
} from "react-native-reanimated"
import {
  Gesture,
  GestureDetector,
  GestureType,
} from "react-native-gesture-handler"
import { ZoomListContext } from "./zoom-list-context"
import { StatusBar } from "expo-status-bar"

type Props = {
  children: React.ReactNode
  minimumZoomScale?: number
  maximumZoomScale?: number
  simultaneousGesture?: GestureType
  onZoomBegin?: () => void
  onZoomEnd?: () => void
} & ViewProps
const { width, height } = Dimensions.get("window")
export const Zoom = React.memo((props: Props) => {
  const {
    minimumZoomScale = 1,
    maximumZoomScale = 4,
    style: propStyle,
    onLayout,
    onZoomBegin,
    onZoomEnd,
    simultaneousGesture,
  } = props

  const zoomListContext = useContext(ZoomListContext)

  const translationX = useSharedValue(0)
  const translationY = useSharedValue(0)
  const originX = useSharedValue(0)
  const originY = useSharedValue(0)
  const scale = useSharedValue(1)
  const isPinching = useSharedValue(false)
  const isZoomed = useSharedValue(false)
  const viewHeight = useSharedValue(0)
  const viewWidth = useSharedValue(0)

  const prevScale = useSharedValue(0)
  const offsetScale = useSharedValue(0)
  const prevTranslationX = useSharedValue(0)
  const prevTranslationY = useSharedValue(0)

  const panTranslateX = useSharedValue(0)
  const panTranslateY = useSharedValue(0)
  const zIndex = useSharedValue(0)
  const resetZoomState = useMemo(() => {
    return () => {
      "worklet"
      // reset all state
      translationX.value = withTiming(0)
      translationY.value = withTiming(0)
      scale.value = withTiming(1)
      originX.value = 0
      originY.value = 0
      isPinching.value = false
      prevScale.value = 0
      prevTranslationX.value = 0
      prevTranslationY.value = 0
      panTranslateX.value = 0
      panTranslateY.value = 0
    }
  }, [maximumZoomScale, minimumZoomScale, zoomListContext, simultaneousGesture])
  const overlayGesture = useMemo(() => {
    const doubleTap = Gesture.Tap()
      .onStart((e) => {
        // if zoomed in or zoomed out, we want to reset
        if (scale.value !== 1) {
          resetZoomState()
          zIndex.value = withTiming(0)
        } else {
          // translate the image to the focal point and zoom
          scale.value = withTiming(maximumZoomScale)
          translationX.value = withTiming(
            -1 * (maximumZoomScale * (e.x - viewWidth.value / 2))
          )
          translationY.value = withTiming(
            -1 * (maximumZoomScale * (e.y - viewHeight.value / 2))
          )
          zIndex.value = 2
        }
      })
      .numberOfTaps(1)

    return Gesture.Race(doubleTap)
  }, [maximumZoomScale, minimumZoomScale, zoomListContext, simultaneousGesture])
  const gesture = useMemo(() => {
    // we only activate pan handler when the image is zoomed or user is not pinching
    const pan = Gesture.Pan()
      .onStart(() => {
        if (isPinching.value || !isZoomed.value) return

        cancelAnimation(translationX)
        cancelAnimation(translationY)
        cancelAnimation(scale)

        prevTranslationX.value = translationX.value
        prevTranslationY.value = translationY.value
        zIndex.value = 2
      })
      .onUpdate((e) => {
        if (isPinching.value || !isZoomed.value) {
          panTranslateX.value = e.translationX
          panTranslateY.value = e.translationY
        } else {
          // imagine what happens to pixels when we zoom in. (they get multiplied by x times scale)
          const maxTranslateX =
            (viewWidth.value / 2) * scale.value - viewWidth.value / 2
          const minTranslateX = -maxTranslateX

          const maxTranslateY =
            (viewHeight.value / 2) * scale.value - viewHeight.value / 2
          const minTranslateY = -maxTranslateY

          const nextTranslateX =
            prevTranslationX.value + e.translationX - panTranslateX.value
          const nextTranslateY =
            prevTranslationY.value + e.translationY - panTranslateY.value

          if (nextTranslateX > maxTranslateX) {
            translationX.value = maxTranslateX
          } else if (nextTranslateX < minTranslateX) {
            translationX.value = minTranslateX
          } else {
            translationX.value = nextTranslateX
          }

          if (nextTranslateY > maxTranslateY) {
            translationY.value = maxTranslateY
          } else if (nextTranslateY < minTranslateY) {
            translationY.value = minTranslateY
          } else {
            translationY.value = nextTranslateY
          }
        }
      })
      .onEnd(() => {
        if (isPinching.value || !isZoomed.value) return

        panTranslateX.value = 0
        panTranslateY.value = 0
        // zIndex.value = 0
      })

    const pinch = Gesture.Pinch()
      .onStart(() => {
        cancelAnimation(translationX)
        cancelAnimation(translationY)
        cancelAnimation(scale)
        prevScale.value = scale.value
        offsetScale.value = scale.value
        zIndex.value = 2
      })
      .onUpdate((e) => {
        // when pointer is 1 we don't want to translate origin
        if (e.numberOfPointers === 1 && isPinching.value) {
          prevTranslationX.value = translationX.value
          prevTranslationY.value = translationY.value
          isPinching.value = false
        } else if (e.numberOfPointers === 2) {
          const newScale = prevScale.value * e.scale

          if (newScale < minimumZoomScale || newScale > maximumZoomScale) return

          scale.value = prevScale.value * e.scale

          // reset the origin
          if (!isPinching.value) {
            isPinching.value = true
            originX.value = e.focalX
            originY.value = e.focalY
            prevTranslationX.value = translationX.value
            prevTranslationY.value = translationY.value
            offsetScale.value = scale.value
          }

          if (isPinching.value) {
            // translate the image to the focal point as we're zooming
            translationX.value =
              prevTranslationX.value +
              -1 *
                ((scale.value - offsetScale.value) *
                  (originX.value - viewWidth.value / 2))
            translationY.value =
              prevTranslationY.value +
              -1 *
                ((scale.value - offsetScale.value) *
                  (originY.value - viewHeight.value / 2))
          }
        }
      })
      .onEnd(() => {
        isPinching.value = false
        prevTranslationX.value = translationX.value
        prevTranslationY.value = translationY.value

        if (scale.value < 1.1) {
          resetZoomState()
        }
      })

    const doubleTap = Gesture.Tap()
      .onStart((e) => {
        // if zoomed in or zoomed out, we want to reset
        if (scale.value !== 1) {
          resetZoomState()
          zIndex.value = withTiming(0)
        } else {
          // translate the image to the focal point and zoom
          scale.value = withTiming(maximumZoomScale)
          translationX.value = withTiming(
            -1 * (maximumZoomScale * (e.x - viewWidth.value / 2))
          )
          translationY.value = withTiming(
            -1 * (maximumZoomScale * (e.y - viewHeight.value / 2))
          )
          zIndex.value = 2
        }
      })
      .numberOfTaps(2)

    if (zoomListContext?.simultaneousPanGestureRef) {
      pan.simultaneousWithExternalGesture(
        zoomListContext?.simultaneousPanGestureRef
      )
    }

    return Gesture.Race(
      doubleTap,
      simultaneousGesture
        ? Gesture.Simultaneous(pan, pinch, simultaneousGesture)
        : Gesture.Simultaneous(pan, pinch)
    )

    // only add prop dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maximumZoomScale, minimumZoomScale, zoomListContext, simultaneousGesture])

  useDerivedValue(() => {
    if (scale.value > 1 && !isZoomed.value) {
      isZoomed.value = true
      if (zoomListContext) runOnJS(zoomListContext.onZoomBegin)()
      if (onZoomBegin) runOnJS(onZoomBegin)()
    } else if (scale.value === 1 && isZoomed.value) {
      isZoomed.value = false
      if (zoomListContext) runOnJS(zoomListContext.onZoomEnd)()
      if (onZoomEnd) runOnJS(onZoomEnd)()
    }
  }, [zoomListContext, onZoomBegin, onZoomEnd])

  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translationX.value },
        { translateY: translationY.value },
        { scale: scale.value },
      ],
    }
  }, [])

  const memoizedOnLayout = useCallback(
    (e: LayoutChangeEvent) => {
      viewHeight.value = e.nativeEvent.layout.height
      viewWidth.value = e.nativeEvent.layout.width
      onLayout?.(e)
    },
    [viewHeight, viewWidth, onLayout]
  )

  const memoizedStyle = useMemo(() => [style, propStyle], [style, propStyle])

  return (
    <Animated.View
      style={{
        zIndex: zIndex.value,
      }}
    >
      <GestureDetector gesture={gesture}>
        <Animated.View
          {...props}
          onLayout={memoizedOnLayout}
          style={[
            memoizedStyle,
            {
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            },
          ]}
        />
      </GestureDetector>
      {scale.value !== 1 && (
        <>
          <StatusBar translucent />
          <GestureDetector gesture={overlayGesture}>
            <Pressable
              style={{
                backgroundColor: "black",
                ...StyleSheet.absoluteFillObject,
                width: width * 3,
                height: height * 3,
                justifyContent: "center",
                marginTop: -height,
                marginLeft: -width / 2,
                zIndex: -1,
                opacity: 0.65,
              }}
            />
          </GestureDetector>
        </>
      )}
    </Animated.View>
  )
})
