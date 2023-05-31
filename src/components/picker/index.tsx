import {
  FlatList,
  FlatListProps,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import React, { useEffect } from "react"
import Modal from "../modal"
import Button from "../button"

interface Picker<ItemT> extends Omit<FlatListProps<ItemT>, "renderItem"> {
  visible: boolean
  setVisible: (arg: boolean) => void
  multiSelect: boolean
  selectedItem: ItemT[]
  select: (arg: any) => void
  component: any
  keyU: string
  backGroundColor?: string
}

const Picker = React.memo(<T extends any>(props: Picker<T>) => {
  const {
    visible,
    setVisible,
    multiSelect,
    select,
    selectedItem,
    component: Component,
    keyU,
    ...flatListProps
  } = props
  const key = keyU as keyof T

  const handleSelect = (item: T) => {
    if (multiSelect) {
      if (selectedItem.includes(item)) {
        select([...selectedItem.filter((i) => i[key] !== item[key])])
      } else {
        select([item, ...selectedItem.filter((i) => i[key] !== item[key])])
      }
    } else {
      select([item])
    }

    // Close The picker
    if (!multiSelect) setVisible(false)
  }
  const ClosePicker = () => {
    setVisible(false)
  }
  return (
    <Modal
      type="Picker"
      visible={visible}
      onRequestClose={() => setVisible(false)}
      transparent
      containerStyle={{
        backgroundColor: props?.backGroundColor || "white",
      }}
    >
      <FlatList
        {...flatListProps}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelect(item)}>
            <Component {...(item as object)} />
          </TouchableOpacity>
        )}
      />
      {multiSelect && (
        <Button
          FeedBackType="TouchableOpacity"
          title="Done"
          onPress={() => {
            ClosePicker()
          }}
          buttonStyle={{
            backgroundColor: "red",
          }}
        />
      )}
    </Modal>
  )
})
export default React.memo(Picker)

const styles = StyleSheet.create({})
