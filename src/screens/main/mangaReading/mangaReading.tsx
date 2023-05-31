import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
  useWindowDimensions,
} from "react-native"
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler"
import { Zoom, createZoomListComponent } from "../../../components/zoom"
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from "../../../utils/colors"
import { TitleSubTitle } from "../../../components/titleSubTitle/titleSubTitle"
import { useNavigation } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { LayoutChangeEvent } from "react-native"
import Text from "../../../components/text"
import BottomSheet, {
  BottomSheetView,
  SCREEN_WIDTH,
} from "@gorhom/bottom-sheet"
import { Accelerometer } from "expo-sensors"

const ZoomFlatList = createZoomListComponent(FlatList)

const { width } = Dimensions.get("window")
const MANGA_PAGES = [
  {
    src: require("../../../../assets/manga01.jpg"),
  },
  {
    src: require("../../../../assets/manga02.jpg"),
  },
  {
    src: require("../../../../assets/manga03.jpg"),
  },
  {
    src: require("../../../../assets/manga04.jpg"),
  },
]

const WEBTOON_PAGES = [
  {
    src: require("../../../../assets/webtoon01.jpg"),
  },
  {
    src: require("../../../../assets/webtoon02.jpg"),
  },
  {
    src: require("../../../../assets/webtoon03.jpg"),
  },
]

export interface IStickyHeader extends ViewProps {
  scrollEnabled: boolean
  scrollAnim: Animated.Value
  offsetAnim: Animated.Value
  headerHeight: number
}
const StickyHeader = ({
  scrollEnabled,
  scrollAnim,
  offsetAnim,
  headerHeight,
  children,
}: IStickyHeader) => {
  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: "clamp",
      }),
      offsetAnim
    ),
    0,
    headerHeight
  )

  const navbarTranslate = clampedScroll.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: "clamp",
  })

  return (
    <Animated.View
      style={[
        {
          ...StyleSheet.absoluteFillObject,
          bottom: undefined,
          backgroundColor: "white",
          zIndex: 10000,
        },

        {
          transform: [{ translateY: navbarTranslate }],
          opacity: scrollEnabled ? 1 : 0,
        },
      ]}
      onLayout={(e: LayoutChangeEvent) => {
        console.log(e.nativeEvent.layout.height)
      }}
    >
      {children}
    </Animated.View>
  )
}
const headerHeight = 95.27

const HeaderComponent = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.Header}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-sharp"
            size={28}
            color={COLORS.defaultLightText}
          />
        </TouchableOpacity>
        <View>
          <TitleSubTitle title="Solo Leveling" subTitle="Chapter 62" />
        </View>
      </View>
      <TouchableOpacity>
        <Ionicons name="bookmark-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export const MangaReadingScreen = () => {
  // Sheet
  const sheetRef = useRef<BottomSheet>(null)

  // Animation
  const scrollAnim = useRef(new Animated.Value(0)).current
  const offsetAnim = useRef(new Animated.Value(0)).current
  const _clampedScrollValue = useRef(0)
  const _offsetValue = useRef(0)
  const _scrollValue = useRef(0)
  let scrollEndTimer: NodeJS.Timeout

  useMemo(() => {
    scrollAnim.addListener(({ value }) => {
      const diff = value - _scrollValue.current
      _scrollValue.current = value

      _clampedScrollValue.current = Math.min(
        Math.max(_clampedScrollValue.current + diff, 0),
        headerHeight
      )
    })
    offsetAnim.addListener(({ value }) => {
      _offsetValue.current = value
    })
    return () => {
      clearTimeout(scrollEndTimer)
    }
  }, [])

  // Bottom sheet
  const [bottomSheetCollapsed, setBottomSheetState] = useState<boolean>(true)

  useEffect(() => {
    // Start listening to the accelerometer
    Accelerometer.addListener(handleAccelerometerData)

    return () => {
      Accelerometer.removeAllListeners()
    }
  }, [bottomSheetCollapsed])

  const handleSheetChanges = (index: number) => {
    setBottomSheetState(index === 1 ? false : true)
  }
  const handleAccelerometerData = ({ x, y, z }: Record<string, number>) => {
    // Detect shake event based on accelerometer data
    // You can adjust the threshold values as needed
    const threshold = 1.8
    if (
      Math.abs(x) > threshold ||
      Math.abs(y) > threshold ||
      Math.abs(z) > threshold
    ) {
      // Shake event detected, do something
      console.log("Shake event detected!")
      if (sheetRef.current) {
        if (bottomSheetCollapsed) {
          sheetRef.current.expand()
        } else {
          sheetRef.current.collapse()
        }
      }
    }
  }
  const onMomentumScrollBegin = useCallback(() => {
    clearTimeout(scrollEndTimer)
  }, [])

  const onMomentumScrollEnd = useCallback(() => {
    const toValue =
      _scrollValue.current > headerHeight &&
      _clampedScrollValue.current > headerHeight / 2
        ? _offsetValue.current + headerHeight
        : _offsetValue.current - headerHeight
    // Release Scroll Animation
    Animated.timing(offsetAnim, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }, [
    offsetAnim,
    headerHeight,
    _scrollValue,
    _clampedScrollValue,
    _offsetValue,
  ])

  const onScrollEndDrag = () => {
    clearTimeout(scrollEndTimer)

    scrollEndTimer = setTimeout(onMomentumScrollEnd, 250)
  }

  const renderItem = useCallback(
    ({ item }: { item: (typeof MANGA_PAGES)[0] }) => {
      const { width: imageWidth, height: imageHeight } =
        Image.resolveAssetSource(item.src)
      return (
        <Zoom>
          <Image
            source={item.src}
            style={[
              {
                ...styles.mangaImage,
                aspectRatio: imageWidth / imageHeight,
              },
            ]}
          />
        </Zoom>
      )
    },
    []
  )

  return (
    <GestureHandlerRootView>
      <StatusBar style="auto" backgroundColor="white" />
      <ZoomFlatList
        data={MANGA_PAGES}
        keyExtractor={(item) => item.src.toString()}
        renderItem={renderItem}
        CellRendererComponent={({ children }) => children}
        removeClippedSubviews={false}
        style={{
          backgroundColor: "#0f0f0f",
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollAnim },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onMomentumScrollBegin={onMomentumScrollBegin}
        onScrollEndDrag={onScrollEndDrag}
      />
      <StickyHeader
        scrollEnabled={true}
        scrollAnim={scrollAnim}
        headerHeight={headerHeight}
        offsetAnim={offsetAnim}
      >
        <HeaderComponent />
      </StickyHeader>

      <BottomSheet
        backgroundStyle={{
          backgroundColor: "transparent",
        }}
        ref={sheetRef}
        snapPoints={["1%", "40%"]}
        handleStyle={{
          width: "100%",
          backgroundColor: "blue",
        }}
        onChange={handleSheetChanges}
        handleComponent={() => {
          return (
            <View
              style={{
                paddingVertical: 8,
                top: -11,
              }}
            >
              <View
                style={{
                  backgroundColor: "black",
                  width: SCREEN_WIDTH * 0.33,
                  height: 8,
                  alignSelf: "center",
                  borderRadius: 5,
                  opacity: 0.7,
                  borderColor: "white",
                  borderWidth: 0.3,
                }}
              />
            </View>
          )
        }}
      >
        <BottomSheetView
          style={{
            backgroundColor: "red",
            borderRadius: 20,
            marginTop: -5,
            flex: 1,
          }}
        >
          <Text>Hello</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  mangaImage: {
    width,
    height: undefined,
    resizeMode: "cover",
    marginBottom: 25,
  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 22,
    backgroundColor: "white",
  },
})
