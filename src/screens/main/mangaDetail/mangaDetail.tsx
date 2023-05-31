import { TouchableOpacity, View } from "react-native"
import { Carousel } from "../../../components/carousel/carousel"
import { LikeSlideContainer } from "../../../components/likeSlideContainer/likeSlideContainer."
import ProfileIcon from "../../../components/profileIcon"
import RoundShadow from "../../../components/roundShadow"
import Space from "../../../components/space"
import { general } from "../../../utils/general"
import { FontWeight } from "../../../utils/types"
import Text from "../../../components/text"
import { AntDesign } from "@expo/vector-icons"
import { MangaInfo } from "../../../components/mangaInfo/mangaInfo"
import NavigationHeader from "../../../components/navigation/navigationHeader"
import { useNavigation, useRoute } from "@react-navigation/native"
import {
  ScreenRouteProp,
  TypeNavigationScreen,
} from "../../../types/navigationTypes"
import Screen, { OutScreen } from "../../../components/screen/screen"
import React, { useState } from "react"
import { ButtonSwitch } from "../../../components/buttonSwitch/buttonSwitch"

const InformationMangaDetails = React.memo(() => {
  const route = useRoute<ScreenRouteProp<"MangaDetail">>()
  const navigation = useNavigation<TypeNavigationScreen>()
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            fontSize={general.text.heading + 1}
            fontWeight={FontWeight.Medium}
          >
            Solo Leveling
          </Text>
          <Space height={18} />
          <Text
            fontSize={general.text.text - 2}
            fontWeight={FontWeight.Regular}
            style={{
              letterSpacing: -0.2,
            }}
          >
            Martial art, Action, Comedy & Romance
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#FA6A76",
            justifyContent: "center",
            alignItems: "center",
            height: 45,
            width: 45,
            borderRadius: 25,
          }}
        >
          <RoundShadow size={25} color="#FA6A76" />
          <AntDesign name="heart" size={19} color="white" />
        </View>
      </View>
      <Space height={25} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 0,
        }}
      >
        <MangaInfo label="Rating" info="4.5" />
        <MangaInfo label="Chapter" info="+120" />
        <MangaInfo label="Language" info="EN" />
      </View>
      <Space height={30} />
      <Text
        fontSize={general.text.text - 1}
        fontWeight={FontWeight.Regular}
        style={{
          lineHeight: 18,
        }}
      >
        The journey to the martial peak is a lonely, solitary and long one. In
        the face of adversity, you must survive and remain unyielding...
      </Text>
      <Space height={20} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("Author")}
        >
          <ProfileIcon size={45} />
          <View
            style={{
              marginLeft: 5,
            }}
          >
            <Text fontSize={general.text.text - 2}>Author</Text>
            <Space height={2} />
            <Text
              fontSize={general.text.text - 3}
              fontWeight={FontWeight.Medium}
            >
              By seddik
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 138,
            paddingVertical: 15,
            backgroundColor: "#424F56",
            borderRadius: 20,
          }}
          onPress={() => navigation.navigate("MangaReading")}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Read Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
})
const MangaDetail = React.memo(() => {
  const [switchValue, setSwitchValue] = useState("information")

  // const { id = 1 } = route.params
  return (
    <Screen>
      <NavigationHeader
        title={"Detail Comic"}
        icon="sharealt"
        onPress={() => console.log("header Menu Pressed")}
      />
      <View
        style={{
          marginHorizontal: -22,
        }}
      >
        <Space height={42} />
        <Carousel />
        <Space height={20} />
      </View>
      <OutScreen>
        <LikeSlideContainer>
          <Space height={18} />
          <View>
            <ButtonSwitch
              switchValue={switchValue}
              setSwitchValue={setSwitchValue}
            />
            <Space height={35} />
            {switchValue === "information" ? <InformationMangaDetails /> : null}
          </View>
        </LikeSlideContainer>
      </OutScreen>
    </Screen>
  )
})

export default MangaDetail
