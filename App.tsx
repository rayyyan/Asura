import React from "react"

import { NavigationContainer } from "@react-navigation/native"
import Navigation from "./src/screens/Navigation"
import { SafeAreaView } from "react-native-safe-area-context"

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  )
}

// <SafeAreaView>
//   <View>
//     <View
//       style={{
//         zIndex: -1,
//       }}
//     >
//       <GestureHandlerRootView>
//         <MangaReadingScreen />
//       </GestureHandlerRootView>
//     </View>
//     <StatusBar backgroundColor="white" />
//   </View>
// </SafeAreaView>
