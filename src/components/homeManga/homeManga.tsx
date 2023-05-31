import React from "react"
import { ImageBackground, View } from "react-native"
import { MANGAS } from "../../utils/data"
import { general } from "../../utils/general"
import { FontWeight } from "../../utils/types"
import { Space } from "../space/space"
import Text from "../text"

import { Ionicons } from "@expo/vector-icons"
import { ChapterBanner } from "../chapterBanner/chapterBanner"
import { styles } from "./styles"

export const HomeManga = React.memo(({ number = 0 }: { number?: number }) => {
  return (
    <View>
      <Space height={22} />
      <View style={styles.container}>
        <View style={styles.card}>
          <ImageBackground
            source={{
              uri: MANGAS[number].src,
            }}
            style={styles.image}
          >
            <ChapterBanner isTop text={"Chapter 615"} />
            <ChapterBanner text={"Manhua"} />
          </ImageBackground>
        </View>
        <Space height={18} />
        <View style={styles.title}>
          <Text fontSize={general.text.normal} fontWeight={FontWeight.Medium}>
            Solo Leveling
          </Text>
          <Text
            style={styles.text}
            fontSize={general.text.text}
            fontWeight={FontWeight.Regular}
          >
            <Ionicons name="time-outline" size={24} color="#6F6F6F" /> 45
            Minutes Ago
          </Text>
        </View>
      </View>
    </View>
  )
})
