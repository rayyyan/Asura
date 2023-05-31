import {
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native"
import Text from "../text"
import { general } from "../../utils/general"
import { styles } from "./styles"
import React from "react"

interface IProfileIcon extends TouchableOpacityProps {
  size: number
  isAvatar?: boolean
  notificationNumber?: number
}

export const ProfileIcon = React.memo((props: IProfileIcon) => {
  const { size = 45, isAvatar = false, notificationNumber, ...tProps } = props
  return (
    <View style={styles.center} {...tProps}>
      <View
        style={[
          styles.container,
          {
            opacity: isAvatar ? 1 : 0.6,
            width: size,
            height: size - 10,
          },
        ]}
      />

      <View
        style={{
          width: size,
          height: size,
          backgroundColor: "white",
          position: "absolute",
          borderRadius: size,
        }}
      />
      <View>
        {isAvatar && (
          <View
            style={[
              styles.notification,
              {
                left: size - 16,
              },
            ]}
          >
            <Text color="white" fontSize={general.text.text - 5}>
              {notificationNumber}
            </Text>
          </View>
        )}
        <Image
          source={require("../../../assets/avatar.png")}
          resizeMode="contain"
          style={{
            width: size - 3,
            height: size - 3,
            borderRadius: size,
          }}
        />
      </View>
    </View>
  )
})
