import { View } from "react-native"
import Space from "../../../components/space"
import LikeSlideContainerGradient from "../../../components/LikeSlideContainerGradient"
import ProfileIcon from "../../../components/profileIcon"
import { general } from "../../../utils/general"
import { FontWeight } from "../../../utils/types"
import Text from "../../../components/text"
import { BannerButton } from "../../../components/bannerButton/bannerButton"
import NavigationHeader from "../../../components/navigation/navigationHeader"
import Screen from "../../../components/screen/screen"
import React from "react"
const PScreen = () => {
  return (
    <Screen>
      <NavigationHeader
        title={"My Profile"}
        icon="ellipsis1"
        onPress={() => console.log("header Menu Pressed")}
      />
      <Space height={75} />
      <View>
        <ProfileIcon size={110} />
        <Space height={20} />
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            fontSize={general.text.heading + 2}
            fontWeight={FontWeight["Semi Bold"]}
          >
            {"Mira Suxi"}
          </Text>
          <Text fontSize={general.text.normal} fontWeight={FontWeight.Regular}>
            {"Writer"}
          </Text>
        </View>
      </View>
      <Space height={50} />
      <View>
        <LikeSlideContainerGradient numberOfItems={2}>
          <View
            style={{
              paddingHorizontal: 22,
            }}
          >
            <Space height={20} />
            <BannerButton />
            <Space height={20} />
            <BannerButton />
          </View>
        </LikeSlideContainerGradient>
      </View>
    </Screen>
  )
}
export const ProfileScreen = React.memo(PScreen)
