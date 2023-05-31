import { View, ScrollView as RNScrollView } from "react-native"
import { Screen } from "../../../components/screen/screen"
import Header from "../../../components/header"
import { HomeManga } from "../../../components/homeManga/homeManga"
import HomeFilter from "../../../components/homeFilter/homeFilter"

const HomeScreen = () => {
  return (
    <Screen>
      <Header />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <HomeFilter text="All" isActive />
        <HomeFilter text="Manhwa" />
        <HomeFilter text="Manhua" />
        <HomeFilter text="Manga" />
      </View>

      <RNScrollView
        style={{
          marginHorizontal: -22,
        }}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 340,
          marginHorizontal: 22,
        }}
      >
        <HomeManga />
        <HomeManga number={1} />
        <HomeManga number={2} />
      </RNScrollView>
    </Screen>
  )
}
