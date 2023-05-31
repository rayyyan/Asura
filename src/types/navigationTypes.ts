import { NavigatorScreenParams, RouteProp } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
  Auth: undefined
  Main: NavigatorScreenParams<MainStackParamList>
}
export type AuthStackParamList = {
  Login: undefined
  Splash: undefined
  Loading: undefined
}

export type MainStackParamList = {
  Home: { screen: string; key: string } | undefined
  Profile: { screen?: string; key?: string; detail?: any } | undefined
  Trending: undefined
  Author: undefined
  MangaReading: undefined
  Library: undefined
  MangaDetail:
    | {
        id?: string
      }
    | undefined
}
export type AllStackParamList = {} & RootStackParamList &
  AuthStackParamList &
  MainStackParamList

//Screens
export type TypeNavigationScreen = NativeStackNavigationProp<
  AllStackParamList,
  keyof AllStackParamList
>

//Routes
export type ScreenRouteProp<RouteName extends keyof MainStackParamList> =
  RouteProp<MainStackParamList, RouteName>
