import React from "react"
import { TouchableOpacity, View } from "react-native"
import Header from "../../../components/header"
import Space from "../../../components/space"
import Text from "../../../components/text"
import { general } from "../../../utils/general"
import { COLORS } from "../../../utils/colors"
import { AntDesign } from "@expo/vector-icons"
import { FavoriteCard } from "../../../components/favoriteCard/favoriteCard"
import Screen from "../../../components/screen/screen"

export const FavoriteScreen = React.memo(() => {
  return (
    <Screen>
      <Header />
      <Space height={20} />
      <TouchableOpacity
        style={{
          backgroundColor: "#F7F7F7",
          paddingVertical: 15,
          borderRadius: 24,
        }}
      >
        <View
          style={{
            paddingHorizontal: 22,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text fontSize={general.text.normal}>All Comic</Text>
          <AntDesign
            name="caretdown"
            size={12}
            color={COLORS.defaultLightText}
          />
        </View>
      </TouchableOpacity>
      <Space height={12} />
      <FavoriteCard />
      <FavoriteCard />
      <FavoriteCard />
    </Screen>
  )
})
