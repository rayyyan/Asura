import { StyleSheet, TouchableOpacity, View } from "react-native"
import Header from "../header"
import { Space } from "../space/space"
import { COLORS } from "../../utils/colors"
import { general } from "../../utils/general"
import ProfileIcon from "../profileIcon"
import { MenuNavigatorItem } from "./menuNavigationItem"
import { AntDesign } from "@expo/vector-icons"
import { TitleSubTitle } from "../titleSubTitle/titleSubTitle"
import Screen from "../screen/screen"
import {
  NavigatorScreenParams,
  useNavigation,
  useRoute,
} from "@react-navigation/native"
import {
  MainStackParamList,
  TypeNavigationScreen,
} from "../../types/navigationTypes"
import React from "react"

export const MenuNavigator = ({ close }: { close: () => void }) => {
  const { name } = useRoute()
  const navigation = useNavigation<TypeNavigationScreen>()
  const handleNavigation = (screen: keyof MainStackParamList) => {
    close()
    navigation.navigate(screen)
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          marginHorizontal: -22,
          zIndex: -3,
        }}
      />

      <Space height={75} />
      <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
          <View style={styles.flexRow}>
            <ProfileIcon size={40} />
            <TitleSubTitle />
          </View>
          <AntDesign name="caretdown" color={COLORS.defaultLightText} />
        </TouchableOpacity>
        <Space height={28} />
        <MenuNavigatorItem
          name="home"
          isActive={name === "Trending"}
          onPress={() => handleNavigation("Trending")}
        />
        <MenuNavigatorItem
          name="Explore Comic"
          isActive={name === ""}
          onPress={() => handleNavigation("Trending")}
        />
        <MenuNavigatorItem
          name="Library"
          isActive={name === "Library"}
          onPress={() => navigation.navigate("Library")}
        />
        <MenuNavigatorItem
          name="test"
          onPress={() => handleNavigation("Trending")}
        />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 621,
    borderRadius: 30,
    opacity: 0.9,
    paddingVertical: 32,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  button: {
    padding: 16,
    backgroundColor: "white",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderColor: general.borderColor,
    borderWidth: 1,
    borderRadius: 20,
  },
  flexRow: {
    flexDirection: "row",
  },
})
