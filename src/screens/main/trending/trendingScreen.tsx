import {
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native"
import LikeSlideContainerGradient from "../../../components/LikeSlideContainerGradient"
import { BannerButton } from "../../../components/bannerButton/bannerButton"
import { LikeSlideContainer } from "../../../components/likeSlideContainer/likeSlideContainer."
import ProfileIcon from "../../../components/profileIcon"
import SearchInput from "../../../components/searchInput"
import Space from "../../../components/space"
import { MANGAS } from "../../../utils/data"
import { general } from "../../../utils/general"
import { FontWeight } from "../../../utils/types"
import Text from "../../../components/text"
import Screen, { InScreen, OutScreen } from "../../../components/screen/screen"
import Header from "../../../components/header"
import { ScrollView } from "react-native-gesture-handler"
import { TypeNavigationScreen } from "../../../types/navigationTypes"
import { useNavigation } from "@react-navigation/native"
import React from "react"
const TrendingManga = React.memo(({ item, index }: any) => {
  const navigation = useNavigation<TypeNavigationScreen>()

  return (
    <TouchableOpacity
      delayPressIn={65}
      style={{
        overflow: "hidden",
      }}
      onPress={() => {
        navigation.navigate("MangaDetail", {
          id: "1",
        })
      }}
    >
      <Image
        source={{
          uri: item.src,
        }}
        style={{
          height: 135,
          width: 117,
          borderRadius: 8,
          marginBottom: 13,
        }}
        resizeMode="cover"
      />

      <Text
        fontSize={general.text.normal}
        fontWeight={FontWeight["Semi Bold"]}
        numberOfLines={1}
        style={{
          maxWidth: 117,
        }}
      >
        {item.title}
      </Text>
      <Space height={4} />
      <Text fontSize={general.text.text} fontWeight={FontWeight.Regular}>
        By {item.author}
      </Text>
    </TouchableOpacity>
  )
})
export const TrendingScreen = React.memo(() => {
  const navigation = useNavigation<TypeNavigationScreen>()
  return (
    <Screen>
      <OutScreen>
        <ScrollView
          style={{
            height: "100%",
            alignSelf: "center",
          }}
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}
          stickyHeaderIndices={[0]}
        >
          <InScreen>
            <Header />
          </InScreen>
          <InScreen>
            <SearchInput />
            <Space height={26} />
            <Text
              fontSize={general.text.normal}
              fontWeight={FontWeight["Semi Bold"]}
              style={{
                textAlign: "left",
              }}
            >
              Trending Manga
            </Text>
            <Space height={22} />

            <FlatList
              data={MANGAS}
              showsHorizontalScrollIndicator={false}
              horizontal
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    width: 15,
                  }}
                />
              )}
              contentContainerStyle={{
                paddingBottom: 3,
              }}
              renderItem={(data) => <TrendingManga {...data} />}
            />

            <Space height={20} />
          </InScreen>
          <LikeSlideContainer>
            <View>
              <Text
                fontSize={general.text.normal}
                fontWeight={FontWeight["Semi Bold"]}
              >
                Top Author
              </Text>
              <Space height={15} />
              <FlatList
                style={{
                  marginHorizontal: -22,
                }}
                data={[...MANGAS, MANGAS[0]]}
                contentContainerStyle={{
                  paddingHorizontal: 22,
                }}
                ItemSeparatorComponent={() => (
                  <View
                    style={{
                      width: 22,
                    }}
                  />
                )}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Author")}
                  >
                    <ProfileIcon size={70} />
                    <Space height={12} />
                    <Text
                      fontSize={general.text.text}
                      fontWeight={FontWeight.Regular}
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {item.author}
                    </Text>
                  </TouchableOpacity>
                )}
                horizontal
              />
            </View>
            <Space height={8} />
            <LikeSlideContainerGradient numberOfItems={1}>
              <View
                style={{
                  paddingHorizontal: 22,
                }}
              >
                <Text
                  fontSize={general.text.normal}
                  fontWeight={FontWeight.Regular}
                  style={{
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  Continue Reading
                </Text>
                <Space height={20} />
                <BannerButton />
              </View>
            </LikeSlideContainerGradient>
          </LikeSlideContainer>
        </ScrollView>
      </OutScreen>
    </Screen>
  )
})
