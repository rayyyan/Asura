import { StyleSheet, TextInput, View } from "react-native"
import Settings from "../../../assets/components/settings"
import { styles } from "./styles"
import React from "react"
interface ISearchInput {
  placeHolder?: string
}
export const SearchInput = React.memo(
  ({ placeHolder = "Search Manga" }: ISearchInput) => {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={placeHolder}
          placeholderTextColor={"#949494"}
          style={{
            fontSize: 14,
            paddingHorizontal: 16,
          }}
        />
        <View style={styles.icon}>
          <Settings size={18} />
        </View>
      </View>
    )
  }
)
