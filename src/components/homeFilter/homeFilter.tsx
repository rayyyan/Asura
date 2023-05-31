import { Pressable } from "react-native"
import Text from "../text"
import React from "react"

const HomeFilter = React.memo(({ text, isActive = false }: any) => {
  return (
    <Pressable
      style={{
        backgroundColor: isActive ? "#FE5D6E" : "#fff",
        padding: 10,
        minWidth: 65,
        borderRadius: 15,
      }}
    >
      <Text
        style={[
          {
            textAlign: "center",
          },
          isActive ? { color: "white" } : {},
        ]}
      >
        {text}
      </Text>
    </Pressable>
  )
})

export default HomeFilter
