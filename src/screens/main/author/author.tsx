import React from "react"
import { View, TouchableOpacity, ScrollView, Dimensions } from "react-native"
import ProfileIcon from "../../../components/profileIcon"
import Space from "../../../components/space"
import { MANGAS } from "../../../utils/data"
import { general } from "../../../utils/general"
import { FontWeight } from "../../../utils/types"
import Text from "../../../components/text"
import { AntDesign } from "@expo/vector-icons"
import { TitleSubTitle } from "../../../components/titleSubTitle/titleSubTitle"
import { Book } from "../../../components/book/book"
import NavigationHeader from "../../../components/navigation/navigationHeader"
import Screen from "../../../components/screen/screen"

const AuthorScreen = React.memo(() => {
  return (
    <Screen>
      <NavigationHeader
        title={"Detail Author"}
        icon="ellipsis1"
        onPress={() => console.log("header Menu Pressed")}
      />
      <Space height={30} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ProfileIcon size={68} />
        <TitleSubTitle title="TurtleMe" subTitle="44/5" />
      </View>
      <Space height={20} />
      <Text fontSize={general.text.text} fontWeight={FontWeight.Regular}>
        The journey to the martial peak is a lonely, solitary and long one. In
        the face of adversity, you must survive and remain unyielding...
      </Text>
      <Space height={20} />
      <View
        style={{
          height: 1.4,
          backgroundColor: general.borderColor,
        }}
      />
      <Space height={20} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 5,
        }}
      >
        <View>
          <Text
            fontSize={general.text.heading}
            fontWeight={FontWeight["Semi Bold"]}
          >
            10
          </Text>
          <Text fontSize={general.text.text - 2}>Book</Text>
        </View>
        <View>
          <Text
            fontSize={general.text.heading}
            fontWeight={FontWeight["Semi Bold"]}
          >
            239
          </Text>
          <Text fontSize={general.text.text - 2}>Followers</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#FB6877",
            width: "42%",
            padding: 12,
            borderRadius: 20,
          }}
        >
          <Text
            fontSize={general.text.normal}
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Follow
          </Text>
        </TouchableOpacity>
      </View>
      <Space height={20} />

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 8,
        }}
      >
        <Text fontSize={general.text.normal} fontWeight={FontWeight.Medium}>
          Comic
        </Text>
        <AntDesign name="ellipsis1" size={22} />
      </View>

      <ScrollView
        style={{
          marginHorizontal: -22,
        }}
        contentContainerStyle={{
          marginHorizontal: 22,
          paddingBottom: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
        showsVerticalScrollIndicator
      >
        <Book image={MANGAS[0].src} title={MANGAS[0].title} />
        <Book image={MANGAS[2].src} title={MANGAS[2].title} />
        <Book image={MANGAS[1].src} title={MANGAS[1].title} />
        <Book image={MANGAS[0].src} title={MANGAS[0].title} />
        <Book image={MANGAS[0].src} title={MANGAS[0].title} />
        <Book image={MANGAS[2].src} title={MANGAS[2].title} />
      </ScrollView>
    </Screen>
  )
})

export default AuthorScreen
