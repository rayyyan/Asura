import { Image, TouchableOpacity } from "react-native"
import { Space } from "../space/space"
import Text from "../text"
import { general } from "../../utils/general"
import { FontWeight } from "../../utils/types"
import { useNavigation } from "@react-navigation/native"
import { TypeNavigationScreen } from "../../types/navigationTypes"
import React from "react"

export const Book = ({ image, title }: any) => {
  const navigation = useNavigation<TypeNavigationScreen>()

  return (
    <TouchableOpacity
      style={{
        maxWidth: 150,
        paddingBottom: 20,
      }}
      onPress={() =>
        navigation.navigate("MangaDetail", {
          id: "2",
        })
      }
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 180,
          width: 150,
          borderRadius: 10,
        }}
        resizeMode="cover"
      />
      <Space height={8} />
      <Text
        numberOfLines={2}
        fontSize={general.text.normal}
        fontWeight={FontWeight.Medium}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}
