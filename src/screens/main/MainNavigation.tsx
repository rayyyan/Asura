import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FC } from "react"
import { MainStackParamList } from "../../types/navigationTypes"
import { MangaReadingScreen } from "./mangaReading/mangaReading"
import { TrendingScreen } from "./trending/trendingScreen"
import AuthorScreen from "./author/author"
import MangaDetail from "./mangaDetail/mangaDetail"
import { ProfileScreen } from "./profile/profile"
import { FavoriteScreen } from "./favorite/favorite"

const { Navigator, Screen } = createNativeStackNavigator<MainStackParamList>()

export const MainNavigation: FC = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={({}) => ({
      headerShown: false,
    })}
  >
    <Screen name="Trending" component={TrendingScreen} />
    <Screen name="Author" component={AuthorScreen} />
    <Screen name="MangaReading" component={MangaReadingScreen} />
    <Screen name="MangaDetail" component={MangaDetail} />
    <Screen name="Profile" component={ProfileScreen} />
    <Screen name="Library" component={FavoriteScreen} />
  </Navigator>
)
