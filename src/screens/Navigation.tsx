import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootStackParamList } from "../types/navigationTypes"
import { MainNavigation } from "./main/MainNavigation"
import Text from "../components/text"

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

const Navigation = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Main"
    >
      <Screen name="Main" component={MainNavigation} />
    </Navigator>
  )
}

export default Navigation
