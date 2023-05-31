import {
  StyleSheet,
  Text,
  View,
  Modal as RModal,
  ListRenderItem,
} from "react-native"
import React from "react"
import { ModalProps } from "react-native"
import Button from "../button"
import { ViewStyle } from "react-native"
//Icons
import { AntDesign } from "@expo/vector-icons"
interface Modal extends ModalProps {
  containerHeight?: number
  containerStyle?: ViewStyle
  type: "Picker" | "Modal"
  navigationMenu?: boolean
}
const Modal = React.memo((props: Modal) => {
  const {
    onRequestClose,
    containerHeight,
    containerStyle,
    children,
    type,
    animationType,
    navigationMenu = false,
  } = props
  return (
    <RModal {...props} animationType={type === "Picker" ? "slide" : "fade"}>
      <View style={styles.container}>
        <Button
          FeedBackType="TouchableOpacity"
          buttonStyle={[styles.overlay]}
          onPress={onRequestClose}
        />
        <View
          style={[
            styles.innerContainer,
            { height: containerHeight || "100%" },
            containerStyle,
          ]}
        >
          {!containerHeight && !navigationMenu ? (
            <Button
              FeedBackType="TouchableOpacity"
              onPress={onRequestClose}
              buttonStyle={{
                alignSelf: "flex-end",
              }}
            >
              <AntDesign name="closecircle" size={28} />
            </Button>
          ) : null}
          {children ? children : null}
        </View>
      </View>
    </RModal>
  )
})

export default Modal

const styles = StyleSheet.create({
  overlay: {
    width: "100%",
    height: "100%",
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
})
