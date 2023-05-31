import { TouchableOpacity, View, ViewProps } from "react-native"
import ProfileIcon from "../profileIcon"
import Text from "../text"
import { general } from "../../utils/general"
import { FontWeight } from "../../utils/types"
import { Menu } from "../../../assets/components/menu"
import { styles } from "./styles"
import React, { useMemo, useState } from "react"
import Modal from "../modal"
import { MenuNavigator } from "../navigation/menuNavigator"
import { useNavigation } from "@react-navigation/native"
import { TypeNavigationScreen } from "../../types/navigationTypes"
interface IHeader {
  greeting?: string
  username?: string
}
export const Header = React.memo((props: IHeader & ViewProps) => {
  const { greeting = "Good Afternoon", username = "John doe", ...rest } = props
  const [navigationMenuVisible, setNavigationMenuVisible] = useState(false)
  const navigation = useNavigation<TypeNavigationScreen>()
  return (
    <View style={styles.container} {...rest}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <ProfileIcon isAvatar size={45} />
        </TouchableOpacity>
        <View style={styles.greeting}>
          <Text fontSize={14} fontWeight={FontWeight.Regular}>
            {greeting}
          </Text>
          <Text
            fontSize={general.text.heading}
            fontWeight={FontWeight["Semi Bold"]}
          >
            {username}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.menu,
          {
            zIndex: 9995,
          },
        ]}
        onPress={() => {
          setNavigationMenuVisible(!navigationMenuVisible)
        }}
      >
        <Menu />
      </TouchableOpacity>
      <Modal
        type="Modal"
        onRequestClose={() => setNavigationMenuVisible(!navigationMenuVisible)}
        visible={navigationMenuVisible}
        transparent
        navigationMenu
      >
        <MenuNavigator
          close={() => setNavigationMenuVisible(!navigationMenuVisible)}
        />
      </Modal>
    </View>
  )
})
