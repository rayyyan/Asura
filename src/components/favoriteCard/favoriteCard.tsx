import React from "react"
import { Image, TouchableOpacity, View } from "react-native"
import { COLORS } from "../../utils/colors"
import { MANGAS } from "../../utils/data"
import { general } from "../../utils/general"
import { FontWeight } from "../../utils/types"
import Text from "../text"
import { AntDesign } from "@expo/vector-icons"

export const FavoriteCard = React.memo(() => {
  return (
    <TouchableOpacity
      style={{
        borderColor: general.borderColor,
        padding: 22,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 15,
        borderWidth: 1,
        marginBottom: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            width: 55,
            height: 90,
            borderRadius: 10,
          }}
          source={{
            uri: MANGAS[0].src,
          }}
        />
        <View
          style={{
            justifyContent: "space-between",
            marginLeft: 15,
          }}
        >
          <View>
            <Text fontSize={general.text.normal} fontWeight={FontWeight.Medium}>
              {MANGAS[0].title}
            </Text>
            <Text
              fontSize={general.text.text - 2}
              fontWeight={FontWeight.Regular}
            >
              By {MANGAS[0].author}
            </Text>
          </View>
          <Text
            fontSize={general.text.text}
            fontWeight={FontWeight["Medium"]}
            style={{
              alignSelf: "flex-start",
            }}
          >
            Next Chapter 87
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: "#F6F8F8",
            padding: 6,
            position: "absolute",
            right: 0,
            borderRadius: 22,
          }}
        >
          <AntDesign
            name="download"
            color={COLORS.defaultLightText}
            size={18}
          />
        </TouchableOpacity>
        <Text
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
          }}
        >
          454 Views
        </Text>
      </View>
    </TouchableOpacity>
  )
})
